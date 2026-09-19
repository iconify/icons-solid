import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/neymbdbaf.css';
import '../../css/p/p14c00v9b.css';

const viewBox = {"width":301,"height":189};
const content = `<g class="ft5dv1b6b"><path class="neymbdbaf"/><path class="p14c00v9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pl"} {...others} />);
}

export default Component;
