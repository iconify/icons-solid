import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4vbohhei.css';
import '../../css/t/t-tdlib6h.css';
import '../../css/c/cff5u7gra.css';
import '../../css/u/unweze0-f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="t4vbohhei"/><path class="t-tdlib6h"/><path class="cff5u7gra"/><path class="unweze0-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:safety-pin"} {...others} />);
}

export default Component;
