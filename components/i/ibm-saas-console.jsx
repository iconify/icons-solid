import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_o7nh8_y.css';
import '../../css/h/ht-fiobcn.css';
import '../../css/e/ebo3gi1sn.css';
import '../../css/o/ohefunpbk.css';
import '../../css/u/uj-21biux.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="i_o7nh8_y"/><circle class="ht-fiobcn"/><path class="ebo3gi1sn"/><path class="ohefunpbk"/><path class="uj-21biux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-saas-console"} {...others} />);
}

export default Component;
