import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nna7eebvs.css';
import '../../css/g/g9e86pbfe.css';
import '../../css/l/l9zg203ti.css';
import '../../css/g/grfewgbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nna7eebvs wm-shadow"/><path class="g9e86pbfe wm-shadow"/><path class="l9zg203ti"/><path class="grfewgbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heading"} {...others} />);
}

export default Component;
