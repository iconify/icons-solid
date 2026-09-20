import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfe-tv.css';
import '../../css/s/s8e22g.css';
import '../../css/z/z5tiej.css';
import '../../css/d/d-vg0s0b.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfe-tv s8e22g"/><path class="s8e22g z5tiej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:patreon"} {...others} />);
}

export default Component;
