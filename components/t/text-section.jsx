import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6ysopbiv.css';
import '../../css/x/xe9kqvbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6ysopbiv"/><path class="xe9kqvbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-section"} {...others} />);
}

export default Component;
