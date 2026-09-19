import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ha2sv1bxa.css';
import '../../css/e/eicn2f-dn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ha2sv1bxa"/><path class="eicn2f-dn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sticker"} {...others} />);
}

export default Component;
