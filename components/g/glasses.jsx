import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/alo70ezch.css';
import '../../css/w/wwhsvn6bz.css';
import '../../css/x/x8-viqewl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="alo70ezch"/><circle class="wwhsvn6bz"/><path class="x8-viqewl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:glasses"} {...others} />);
}

export default Component;
