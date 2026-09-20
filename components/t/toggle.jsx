import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/u/ufx_3tb7d.css';
import '../../css/w/wtf0wdbbn.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 7)" class="jtowsomii"><circle class="ufx_3tb7d"/><path class="wtf0wdbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:toggle"} {...others} />);
}

export default Component;
