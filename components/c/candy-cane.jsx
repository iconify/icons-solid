import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x3yyiab7u.css';
import '../../css/s/sou7c--qw.css';
import '../../css/k/k4kerw0_e.css';
import '../../css/u/uya6wcbfz.css';
import '../../css/r/r2b6r36-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="x3yyiab7u"/><path class="sou7c--qw wm-shine"/><path class="k4kerw0_e wm-k"/><path class="uya6wcbfz wm-a"/><path class="r2b6r36-w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:candy-cane"} {...others} />);
}

export default Component;
