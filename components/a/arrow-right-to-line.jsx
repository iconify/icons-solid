import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9whd3s1m.css';
import '../../css/u/uand-nogv.css';
import '../../css/j/jyv8qcbyp.css';
import '../../css/f/f1iyzac8z.css';
import '../../css/i/i65d_dbiz.css';
import '../../css/u/uqz9a2u5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9whd3s1m wm-k"/><path class="uand-nogv wm-k"/><path class="jyv8qcbyp wm-k"/><path class="f1iyzac8z wm-a"/><path class="i65d_dbiz wm-a"/><path class="uqz9a2u5g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-right-to-line"} {...others} />);
}

export default Component;
