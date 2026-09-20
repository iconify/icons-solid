import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf7o6hbwi.css';
import '../../css/n/nv0kchhja.css';
import '../../css/q/qtnm21bch.css';
import '../../css/a/alwid7bre.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vf7o6hbwi"/><path class="nv0kchhja"/><path class="qtnm21bch"/><path class="alwid7bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:incognito-mode"} {...others} />);
}

export default Component;
