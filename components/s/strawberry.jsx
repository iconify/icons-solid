import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiupaqbzj.css';
import '../../css/d/dztf14bjn.css';
import '../../css/l/l_pmafbfa.css';
import '../../css/c/c-zlgbb5i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kiupaqbzj"/><path class="dztf14bjn"/><path class="l_pmafbfa"/><path class="c-zlgbb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:strawberry"} {...others} />);
}

export default Component;
