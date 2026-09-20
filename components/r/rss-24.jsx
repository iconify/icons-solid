import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrhks1yem.css';
import '../../css/e/ennyrpbdy.css';
import '../../css/l/lw11p60jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrhks1yem"/><path class="ennyrpbdy"/><path class="lw11p60jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:rss-24"} {...others} />);
}

export default Component;
