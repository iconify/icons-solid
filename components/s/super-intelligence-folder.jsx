import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xd-1c4bmx.css';
import '../../css/n/nz-vb558m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xd-1c4bmx"/><path class="nz-vb558m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-folder"} {...others} />);
}

export default Component;
