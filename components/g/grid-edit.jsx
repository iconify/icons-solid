import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu060xb3h.css';
import '../../css/r/rcn884par.css';
import '../../css/e/e2ptqqbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mu060xb3h"/><path class="rcn884par"/><path class="e2ptqqbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grid-edit"} {...others} />);
}

export default Component;
