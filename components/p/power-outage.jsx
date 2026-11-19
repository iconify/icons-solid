import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ms-0oib8e.css';
import '../../css/e/evpbj2bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ms-0oib8e"/><path class="evpbj2bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:power-outage"} {...others} />);
}

export default Component;
