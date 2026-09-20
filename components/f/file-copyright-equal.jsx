import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvfjeqsph.css';
import '../../css/j/jts2oc0ot.css';
import '../../css/m/m5ty4wb8g.css';
import '../../css/x/xxou3bcpy.css';
import '../../css/z/ziy7tfbbv.css';
import '../../css/a/ak9u27brd.css';
import '../../css/r/r_ciudbub.css';
import '../../css/w/w9s1tfkqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dvfjeqsph"/><path class="jts2oc0ot"/><path class="m5ty4wb8g"/><path class="xxou3bcpy"/><path class="ziy7tfbbv"/><path class="ak9u27brd"/><path class="r_ciudbub"/><path class="w9s1tfkqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-copyright-equal"} {...others} />);
}

export default Component;
