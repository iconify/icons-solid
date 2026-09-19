import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vciwspb7i.css';
import '../../css/i/ij7ttcyqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vciwspb7i"/><path class="ij7ttcyqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:copy-link"} {...others} />);
}

export default Component;
