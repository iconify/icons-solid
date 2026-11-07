import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux5jk213g.css';
import '../../css/l/l8p24vbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ux5jk213g"/><path class="l8p24vbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-cancel-outline"} {...others} />);
}

export default Component;
