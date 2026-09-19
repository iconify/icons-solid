import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-x-dbbuf.css';
import '../../css/z/zcm8uor5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k-x-dbbuf"/><path class="zcm8uor5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:card-shield"} {...others} />);
}

export default Component;
