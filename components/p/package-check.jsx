import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3guqjqch.css';
import '../../css/w/wombppblx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l3guqjqch"/><path class="wombppblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-check"} {...others} />);
}

export default Component;
