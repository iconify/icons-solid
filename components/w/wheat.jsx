import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3z_gcbat.css';
import '../../css/b/bx--5m65z.css';
import '../../css/g/gzs7qb94t.css';
import '../../css/e/e07se5yfl.css';
import '../../css/x/xqedkp-no.css';
import '../../css/o/o6t-i5b9z.css';
import '../../css/m/mx7byprbo.css';
import '../../css/b/b_yi_sqyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i3z_gcbat"/><path class="bx--5m65z"/><path class="gzs7qb94t"/><path class="e07se5yfl"/><path class="xqedkp-no"/><path class="o6t-i5b9z"/><path class="mx7byprbo"/><path class="b_yi_sqyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wheat"} {...others} />);
}

export default Component;
