import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zx9s66bso.css';
import '../../css/g/ghg6w1jbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zx9s66bso"/><path class="ghg6w1jbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:favorite-chart"} {...others} />);
}

export default Component;
