import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udwa2fopk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udwa2fopk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:heading-5"} {...others} />);
}

export default Component;
