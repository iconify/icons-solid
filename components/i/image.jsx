import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nhl82sb_n.css';
import '../../css/p/pq0-byl0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nhl82sb_n"/><path class="pq0-byl0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:image"} {...others} />);
}

export default Component;
