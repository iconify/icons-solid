import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyxq__p8i.css';
import '../../css/t/tnvmgoeyz.css';
import '../../css/c/c61zi6xxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wyxq__p8i"/><path class="tnvmgoeyz"/><path class="c61zi6xxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:peer-to-peer-01"} {...others} />);
}

export default Component;
