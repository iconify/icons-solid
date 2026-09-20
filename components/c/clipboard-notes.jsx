import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/a/a21wpn1pd.css';
import '../../css/s/sfzg3ybyn.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="a21wpn1pd"/><path class="sfzg3ybyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:clipboard-notes"} {...others} />);
}

export default Component;
