import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fem08kbhv.css';
import '../../css/x/x2ngygufn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fem08kbhv"/><path class="x2ngygufn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calculator5"} {...others} />);
}

export default Component;
