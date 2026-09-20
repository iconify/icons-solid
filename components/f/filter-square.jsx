import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pn3-t0bsi.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pn3-t0bsi"/><path class="rvymobzlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-square"} {...others} />);
}

export default Component;
