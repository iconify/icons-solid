import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inekdqlya.css';
import '../../css/v/vvzndmq7j.css';
import '../../css/s/s8gs-vbvb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="inekdqlya"/><path class="vvzndmq7j"/><path class="s8gs-vbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-color-tube-pastel"} {...others} />);
}

export default Component;
