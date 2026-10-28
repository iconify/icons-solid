import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iyz_0qtmu.css';
import '../../css/w/wmgkkbk6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iyz_0qtmu"/><path class="wmgkkbk6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:axis"} {...others} />);
}

export default Component;
