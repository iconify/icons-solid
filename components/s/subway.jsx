import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqroeob7g.css';
import '../../css/i/il713jb8x.css';

const viewBox = {"width":240,"height":47.9};
const content = `<path class="kqroeob7g"/><path class="il713jb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:subway"} {...others} />);
}

export default Component;
