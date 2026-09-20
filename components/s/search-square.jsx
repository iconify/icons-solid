import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ic9_9xz3r.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ic9_9xz3r"/><rect class="tbfod3hgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:search-square"} {...others} />);
}

export default Component;
