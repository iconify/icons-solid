import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/uee9srb7s.css';
import '../../css/l/l1wv36b8h.css';

const viewBox = {"width":254.6,"height":253.5};
const content = `<g class="n1mjunbsu"><path class="uee9srb7s"/><path class="l1wv36b8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tesla-light"} {...others} />);
}

export default Component;
