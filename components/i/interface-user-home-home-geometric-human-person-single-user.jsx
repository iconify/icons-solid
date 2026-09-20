import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xa2w_zv3q.css';
import '../../css/e/e-rncbc-f.css';
import '../../css/e/e-uvgxbpz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="xa2w_zv3q"/><path class="e-rncbc-f"/><path class="e-uvgxbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-user-home-home-geometric-human-person-single-user"} {...others} />);
}

export default Component;
