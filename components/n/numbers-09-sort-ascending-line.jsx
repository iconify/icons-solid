import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz88j1tie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz88j1tie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:numbers-09-sort-ascending-line"} {...others} />);
}

export default Component;
