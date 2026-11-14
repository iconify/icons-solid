import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqaligzzq.css';
import '../../css/q/qs7iabbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hqaligzzq"/><path class="qs7iabbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hammer-01"} {...others} />);
}

export default Component;
