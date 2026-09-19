import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hki4sqbjq.css';
import '../../css/l/l5goj9tdn.css';
import '../../css/n/n-g5w935x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="hki4sqbjq"/><circle class="l5goj9tdn"/><circle class="n-g5w935x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:menu-meatball"} {...others} />);
}

export default Component;
