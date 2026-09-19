import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wr23vsbgm.css';
import '../../css/c/c0gywhb-k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="wr23vsbgm"/><path class="c0gywhb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:gift"} {...others} />);
}

export default Component;
