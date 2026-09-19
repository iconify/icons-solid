import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/il3qnkxvf.css';
import '../../css/d/dn3chbbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="il3qnkxvf"/><path class="dn3chbbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:neighbourhood"} {...others} />);
}

export default Component;
