import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ed3y3zbpp.css';
import '../../css/k/ktoaqbajk.css';
import '../../css/f/fcaoa701q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ed3y3zbpp"/><path class="ktoaqbajk"/><path class="fcaoa701q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:money-exchange"} {...others} />);
}

export default Component;
