import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e_p547b1p.css';
import '../../css/v/vu5ev4b1m.css';
import '../../css/g/g8q560y6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e_p547b1p"/><path class="vu5ev4b1m"/><path class="g8q560y6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-bag-02"} {...others} />);
}

export default Component;
