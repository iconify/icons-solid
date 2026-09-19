import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/onk5l4bbl.css';
import '../../css/l/lifqewb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="onk5l4bbl"/><path class="lifqewb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-01"} {...others} />);
}

export default Component;
