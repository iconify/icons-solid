import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-zfknb-j.css';
import '../../css/x/x_b42ib6c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="y-zfknb-j"/><path class="x_b42ib6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:left-click"} {...others} />);
}

export default Component;
