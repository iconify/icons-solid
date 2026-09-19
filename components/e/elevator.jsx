import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea_zpbnow.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ea_zpbnow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:elevator"} {...others} />);
}

export default Component;
