import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6k7gcc2m.css';
import '../../css/h/hdn7b_0el.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k6k7gcc2m"/><path class="hdn7b_0el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layer-1-16"} {...others} />);
}

export default Component;
