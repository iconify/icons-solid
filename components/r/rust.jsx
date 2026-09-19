import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/g/gfjx0h0sh.css';
import '../../css/h/hgv6-1_gy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="gfjx0h0sh"/><path class="hgv6-1_gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rust"} {...others} />);
}

export default Component;
