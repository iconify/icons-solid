import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ue_aoenfo.css';
import '../../css/m/mxwiu7bad.css';
import '../../css/u/uklbiw0yy.css';
import '../../css/d/dniz5zvhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ue_aoenfo wm-shadow"/><path class="mxwiu7bad wm-shadow"/><path class="uklbiw0yy"/><path class="dniz5zvhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:map-pin-check"} {...others} />);
}

export default Component;
