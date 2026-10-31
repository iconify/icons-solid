import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nit4bmvhy.css';
import '../../css/p/p48i41b9t.css';
import '../../css/r/rkmu18b6w.css';
import '../../css/d/dlh8ambyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nit4bmvhy wm-shadow"/><path class="p48i41b9t wm-shadow"/><path class="rkmu18b6w"/><path class="dlh8ambyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:zap-off"} {...others} />);
}

export default Component;
