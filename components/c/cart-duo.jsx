import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-_rugwzf.css';
import '../../css/e/ebb2ojxhs.css';
import '../../css/c/cj0vjrbgw.css';
import '../../css/n/n1tl19b-d.css';
import '../../css/t/t-mywx3id.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r-_rugwzf"/><path class="ebb2ojxhs"/><path class="cj0vjrbgw"/><path class="n1tl19b-d"/><path class="t-mywx3id"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cart-duo"} {...others} />);
}

export default Component;
