import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ik3w5piwl.css';
import '../../css/z/z77-8wsfv.css';
import '../../css/v/vjknskzjt.css';
import '../../css/c/c2fdelwhz.css';
import '../../css/l/l-lx1h0ik.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ik3w5piwl"/><path class="z77-8wsfv"/><path class="vjknskzjt"/><path class="c2fdelwhz"/><path class="l-lx1h0ik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ghost"} {...others} />);
}

export default Component;
