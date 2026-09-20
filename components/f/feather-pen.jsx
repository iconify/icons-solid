import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pgcml6wvh.css';
import '../../css/s/sfau_ib-n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pgcml6wvh"/><path class="sfau_ib-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:feather-pen"} {...others} />);
}

export default Component;
