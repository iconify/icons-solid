import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bcpuabciq.css';
import '../../css/h/haa-m_w9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bcpuabciq"/><path class="haa-m_w9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:share-android"} {...others} />);
}

export default Component;
