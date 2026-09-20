import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj38uwk8s.css';
import '../../css/a/aae6-0eex.css';
import '../../css/z/zdere3b2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="uj38uwk8s"><path class="aae6-0eex"/><circle class="zdere3b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:togetherdotai"} {...others} />);
}

export default Component;
