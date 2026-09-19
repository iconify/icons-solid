import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n72q2mb6a.css';
import '../../css/q/q_b-6hmia.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="n72q2mb6a"/><path class="q_b-6hmia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:cast"} {...others} />);
}

export default Component;
