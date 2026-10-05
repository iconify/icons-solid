import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e0twvnfzl.css';
import '../../css/l/lstqv8blb.css';
import '../../css/y/yfgq3cchb.css';
import '../../css/x/x5wgfjb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="e0twvnfzl"/><path class="lstqv8blb"/><path class="yfgq3cchb"/><path class="x5wgfjb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:users"} {...others} />);
}

export default Component;
