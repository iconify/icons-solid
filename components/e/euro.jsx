import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/y/yt1sn-2sn.css';
import '../../css/o/oisne4m_b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="yt1sn-2sn"/><path class="oisne4m_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:euro"} {...others} />);
}

export default Component;
