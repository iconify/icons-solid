import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncc0iab_f.css';
import '../../css/e/e_nr_ib2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ncc0iab_f"/><path class="e_nr_ib2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:building"} {...others} />);
}

export default Component;
