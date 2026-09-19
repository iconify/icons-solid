import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/y/yojx2obqy.css';
import '../../css/y/y9hdzabck.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="yojx2obqy"/><path class="y9hdzabck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:coffeescript"} {...others} />);
}

export default Component;
