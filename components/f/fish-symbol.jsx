import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lovf6abha.css';
import '../../css/e/e_fu4pe8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lovf6abha"/><path class="e_fu4pe8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fish-symbol"} {...others} />);
}

export default Component;
