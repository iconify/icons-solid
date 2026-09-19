import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psiglkazx.css';
import '../../css/y/y9sy2mbmn.css';
import '../../css/y/y1yvd7_6c.css';
import '../../css/a/alu5zrk5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="psiglkazx"><path class="y9sy2mbmn"/><path class="y1yvd7_6c"/><path class="alu5zrk5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:bare-metal-solutions"} {...others} />);
}

export default Component;
