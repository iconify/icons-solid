import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sog6aobne.css';
import '../../css/o/o8vpynb-d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="sog6aobne"/><path class="o8vpynb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:phone-rotate-mobile"} {...others} />);
}

export default Component;
