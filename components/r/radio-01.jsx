import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xwbkj8xsu.css';
import '../../css/w/wd07y9bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xwbkj8xsu"/><path class="wd07y9bkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radio-01"} {...others} />);
}

export default Component;
