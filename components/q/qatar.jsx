import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu52i9kgw.css';
import '../../css/x/x4jxcf4cm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="pu52i9kgw"/><path class="x4jxcf4cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:qatar"} {...others} />);
}

export default Component;
