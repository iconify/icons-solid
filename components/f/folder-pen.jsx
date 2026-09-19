import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h5x05rpbj.css';
import '../../css/n/n9xq3dbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h5x05rpbj"/><path class="n9xq3dbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-pen"} {...others} />);
}

export default Component;
