import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4937g1yq.css';
import '../../css/e/etvrawbsd.css';
import '../../css/v/vlzselbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p4937g1yq"/><path class="etvrawbsd"/><path class="vlzselbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:search-user"} {...others} />);
}

export default Component;
