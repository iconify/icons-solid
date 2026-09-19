import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tww87pi2j.css';
import '../../css/j/jq6z65c4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tww87pi2j"/><path class="jq6z65c4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:matches"} {...others} />);
}

export default Component;
