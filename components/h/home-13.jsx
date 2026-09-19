import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nhg65vm-y.css';
import '../../css/g/gd88_0z7r.css';
import '../../css/u/uwh40hb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nhg65vm-y"/><path class="gd88_0z7r"/><path class="uwh40hb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-13"} {...others} />);
}

export default Component;
