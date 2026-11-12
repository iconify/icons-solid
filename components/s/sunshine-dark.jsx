import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grfi6tbpu.css';
import '../../css/r/rwxu_6bii.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="grfi6tbpu"/><path class="rwxu_6bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sunshine-dark"} {...others} />);
}

export default Component;
