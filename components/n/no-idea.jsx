import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hiiflsbvw.css';
import '../../css/c/c6br4ybmr.css';
import '../../css/b/b0d8i51hx.css';
import '../../css/e/engdf_brx.css';
import '../../css/w/wcirrbcym.css';
import '../../css/o/o0xw4kbra.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hiiflsbvw"/><path class="c6br4ybmr"/><circle class="b0d8i51hx"/><path class="engdf_brx"/><path class="wcirrbcym"/><path class="o0xw4kbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:no-idea"} {...others} />);
}

export default Component;
