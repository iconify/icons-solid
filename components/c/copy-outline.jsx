import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzf93bbes.css';
import '../../css/f/fy34vxb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzf93bbes"/><path clip-rule="evenodd" class="fy34vxb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:copy-outline"} {...others} />);
}

export default Component;
