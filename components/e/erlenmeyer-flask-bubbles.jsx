import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz8smpd4d.css';
import '../../css/r/r0711mb5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mz8smpd4d"/><path class="r0711mb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:erlenmeyer-flask-bubbles"} {...others} />);
}

export default Component;
