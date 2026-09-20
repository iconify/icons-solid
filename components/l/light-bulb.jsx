import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k3zebeaxi.css';
import '../../css/u/unkt3clqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k3zebeaxi"/><path class="unkt3clqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:light-bulb"} {...others} />);
}

export default Component;
