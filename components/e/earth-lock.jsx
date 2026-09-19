import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl-0owazw.css';
import '../../css/q/qlxd63wmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yl-0owazw"/><path class="qlxd63wmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:earth-lock"} {...others} />);
}

export default Component;
