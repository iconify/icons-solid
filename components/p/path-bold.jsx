import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub2coxuon.css';
import '../../css/s/sisnjrobj.css';
import '../../css/a/auq61abfx.css';
import '../../css/w/w592iwlnf.css';
import '../../css/q/qgovcdcyb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ub2coxuon"/><path clip-rule="evenodd" class="sisnjrobj"/><path class="auq61abfx"/><path clip-rule="evenodd" class="w592iwlnf"/><path class="qgovcdcyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:path-bold"} {...others} />);
}

export default Component;
