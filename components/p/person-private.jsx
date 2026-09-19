import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frf5-licm.css';
import '../../css/h/h1tzoq9te.css';
import '../../css/y/yh0pkfbkw.css';
import '../../css/x/x2v4sktgi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="frf5-licm"/><path class="h1tzoq9te"/><path clip-rule="evenodd" class="yh0pkfbkw"/><path clip-rule="evenodd" class="x2v4sktgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:person-private"} {...others} />);
}

export default Component;
