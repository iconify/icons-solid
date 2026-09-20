import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ken7n5e9c.css';
import '../../css/s/sy3-pn_gl.css';
import '../../css/g/gcngc6nkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ken7n5e9c"/><path class="sy3-pn_gl"/><path class="gcngc6nkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:power-outlet-type-f"} {...others} />);
}

export default Component;
