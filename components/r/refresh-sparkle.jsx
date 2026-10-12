import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9x33ufkc.css';
import '../../css/h/h1xsle27q.css';
import '../../css/i/icpdbcovf.css';
import '../../css/c/c20o-zb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w9x33ufkc"/><path class="h1xsle27q"/><path class="icpdbcovf"/><path class="c20o-zb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-sparkle"} {...others} />);
}

export default Component;
