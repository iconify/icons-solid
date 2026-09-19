import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ji_bzg.css';
import '../../css/b/btytjgehb.css';
import '../../css/x/xrhckqv-s.css';
import '../../css/m/myh4p8ksh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i12ji_bzg"/><path class="btytjgehb"/><ellipse class="xrhckqv-s"/><path class="myh4p8ksh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-pesde-open"} {...others} />);
}

export default Component;
