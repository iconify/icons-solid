import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da7423ruy.css';
import '../../css/x/xmg1kynso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="da7423ruy"/><path class="xmg1kynso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:prompt-duotone-round"} {...others} />);
}

export default Component;
