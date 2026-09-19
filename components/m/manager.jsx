import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-9xcgbvn.css';
import '../../css/z/zbb76tb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c-9xcgbvn"/><path class="zbb76tb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:manager"} {...others} />);
}

export default Component;
