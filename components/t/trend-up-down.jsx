import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dj9bctb0u.css';
import '../../css/y/ya0_b8bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dj9bctb0u"/><path class="ya0_b8bjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trend-up-down"} {...others} />);
}

export default Component;
