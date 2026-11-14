import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uedd4mbdj.css';
import '../../css/s/snbo6wtuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uedd4mbdj"/><path class="snbo6wtuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-01"} {...others} />);
}

export default Component;
