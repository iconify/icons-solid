import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nmwywjbav.css';
import '../../css/d/d11htcssl.css';
import '../../css/e/eml-au9gd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nmwywjbav"/><path class="d11htcssl"/><path class="eml-au9gd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gesture-double-tap"} {...others} />);
}

export default Component;
