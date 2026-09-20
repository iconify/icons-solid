import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v51rfzbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v51rfzbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:align-vertical-distribute-end"} {...others} />);
}

export default Component;
