import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmh5-ebmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmh5-ebmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ampersands"} {...others} />);
}

export default Component;
