import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwcpvj2qt.css';
import '../../css/z/z0s33xbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kwcpvj2qt"/><path class="z0s33xbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:playlist-01"} {...others} />);
}

export default Component;
