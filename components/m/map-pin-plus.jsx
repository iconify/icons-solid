import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uzrxt9cks.css';
import '../../css/n/nbr52gbso.css';
import '../../css/a/arhdwcb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uzrxt9cks"/><path class="nbr52gbso"/><path class="arhdwcb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:map-pin-plus"} {...others} />);
}

export default Component;
