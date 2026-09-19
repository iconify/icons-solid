import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/m/mb5m2wb9f.css';
import '../../css/e/eksr6el1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="mb5m2wb9f"/><path class="eksr6el1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:link"} {...others} />);
}

export default Component;
