import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/etmy83b_j.css';
import '../../css/b/bt5j-db6v.css';
import '../../css/d/d4b6rfb4h.css';
import '../../css/q/q2g8hjs-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path clip-rule="evenodd" class="etmy83b_j"/><path class="bt5j-db6v"/><path clip-rule="evenodd" class="d4b6rfb4h"/><path class="q2g8hjs-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-fit-logo"} {...others} />);
}

export default Component;
