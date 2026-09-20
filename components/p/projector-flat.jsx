import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vm0-cwb_j.css';
import '../../css/u/uu7njfm_v.css';
import '../../css/v/v8xw9bbrg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vm0-cwb_j"/><path clip-rule="evenodd" class="uu7njfm_v"/><path class="v8xw9bbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:projector-flat"} {...others} />);
}

export default Component;
