import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ujojmacfj.css';
import '../../css/z/ziceyrb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ujojmacfj"/><path class="ziceyrb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-scan"} {...others} />);
}

export default Component;
