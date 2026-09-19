import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4mc9zblt.css';
import '../../css/m/msskd8qws.css';
import '../../css/b/bnif0nb5f.css';
import '../../css/l/l-jqb5b_t.css';
import '../../css/j/jho_vutkm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e4mc9zblt"/><path class="msskd8qws"/><path class="bnif0nb5f"/><path class="l-jqb5b_t"/><path class="jho_vutkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shaved-ice"} {...others} />);
}

export default Component;
