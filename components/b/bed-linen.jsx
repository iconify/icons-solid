import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzka1x0wa.css';
import '../../css/f/fjej9hboc.css';
import '../../css/c/cylywgbpa.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qzka1x0wa"/><path class="fjej9hboc"/><path class="cylywgbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bed-linen"} {...others} />);
}

export default Component;
