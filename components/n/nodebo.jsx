import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbozhdcpj.css';
import '../../css/s/sb-7x_b3r.css';
import '../../css/f/fzmbfkb6j.css';

const viewBox = {"width":120,"height":120};
const content = `<g class="zbozhdcpj"><circle class="sb-7x_b3r"/><path class="fzmbfkb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nodebo"} {...others} />);
}

export default Component;
