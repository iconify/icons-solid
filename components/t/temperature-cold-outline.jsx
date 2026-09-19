import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xejf2jbsh.css';
import '../../css/w/w7y2rjsln.css';
import '../../css/i/i0sv2zf0k.css';
import '../../css/m/mkbu6bcri.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xejf2jbsh"/><path clip-rule="evenodd" class="w7y2rjsln"/><path class="i0sv2zf0k"/><path clip-rule="evenodd" class="mkbu6bcri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:temperature-cold-outline"} {...others} />);
}

export default Component;
