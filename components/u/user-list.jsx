import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nc7k1eb2j.css';
import '../../css/g/ghya2pbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nc7k1eb2j"/><circle class="ghya2pbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-list"} {...others} />);
}

export default Component;
