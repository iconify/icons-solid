import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs83cbbpj.css';
import '../../css/x/xe_mok4yw.css';
import '../../css/t/tyubjgq6r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hs83cbbpj"><path class="xe_mok4yw"/><path class="tyubjgq6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:camera-outline"} {...others} />);
}

export default Component;
