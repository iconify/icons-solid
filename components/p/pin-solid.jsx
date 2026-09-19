import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwt1mrbko.css';
import '../../css/n/ntdc2345g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vwt1mrbko"/><path class="ntdc2345g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pin-solid"} {...others} />);
}

export default Component;
