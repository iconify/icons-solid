import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-j9si9z.css';
import '../../css/q/qn9lrbsql.css';
import '../../css/r/r2ouyrbdu.css';

const viewBox = {"width":301,"height":225};
const content = `<g class="ft5dv1b6b"><path class="k5-j9si9z"/><path class="qn9lrbsql"/><path class="r2ouyrbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ga"} {...others} />);
}

export default Component;
