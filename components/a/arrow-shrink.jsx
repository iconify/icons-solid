import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pim-13nez.css';
import '../../css/h/hx4043pqx.css';
import '../../css/v/vrd74fvzf.css';
import '../../css/m/mwl5gsbte.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pim-13nez"/><path class="hx4043pqx"/><path class="vrd74fvzf"/><path class="mwl5gsbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-shrink"} {...others} />);
}

export default Component;
