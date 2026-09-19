import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e4gndac2i.css';
import '../../css/m/mr0kfgbyl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="e4gndac2i"/><path class="mr0kfgbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mln"} {...others} />);
}

export default Component;
