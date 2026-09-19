import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hp3kc7bgg.css';
import '../../css/k/ky3xqnbty.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="hp3kc7bgg"/><path class="ky3xqnbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:zoom-in"} {...others} />);
}

export default Component;
