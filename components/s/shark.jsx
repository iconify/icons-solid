import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9s09lb8t.css';
import '../../css/y/yzxpiyiyo.css';
import '../../css/i/iqs1x0bnn.css';
import '../../css/a/ao2g_cctu.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/x/xxx7u60_z.css';
import '../../css/h/h323xnbql.css';
import '../../css/f/f53ce-bjt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v9s09lb8t"/><path class="yzxpiyiyo"/><path class="iqs1x0bnn"/><path class="ao2g_cctu"/><g class="doj9dq_jg"><path class="xxx7u60_z"/><path class="h323xnbql"/><path class="f53ce-bjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shark"} {...others} />);
}

export default Component;
