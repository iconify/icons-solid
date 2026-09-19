import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b0a1sv-ez.css';
import '../../css/m/mdozgxbod.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="b0a1sv-ez"/><path class="mdozgxbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dgb"} {...others} />);
}

export default Component;
