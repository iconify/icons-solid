import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5mkz9bge.css';
import '../../css/l/lchq2yzxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f5mkz9bge"/><path class="lchq2yzxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apple-reminder"} {...others} />);
}

export default Component;
