import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ky_q8kfov.css';
import '../../css/z/zoayn0ldj.css';
import '../../css/y/y9s2ye_ps.css';
import '../../css/z/znealtm7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ky_q8kfov"/><path class="zoayn0ldj"/><path class="y9s2ye_ps"/><path class="znealtm7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:treasure-chest-open"} {...others} />);
}

export default Component;
