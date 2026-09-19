import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0pudkcfc.css';
import '../../css/v/valc7vigf.css';
import '../../css/y/yye_5v80t.css';

const viewBox = {"width":301,"height":227};
const content = `<g class="ft5dv1b6b"><path class="f0pudkcfc"/><path class="valc7vigf"/><path class="yye_5v80t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:dk"} {...others} />);
}

export default Component;
