import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty8l4nl8s.css';
import '../../css/y/yi7ddnb4w.css';
import '../../css/p/pr05wzb5d.css';
import '../../css/t/thdjtvtxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ty8l4nl8s"/><path class="yi7ddnb4w"/><path clip-rule="evenodd" class="pr05wzb5d"/><path class="thdjtvtxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:material-three"} {...others} />);
}

export default Component;
