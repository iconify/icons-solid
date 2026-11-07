import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgz3smvwr.css';
import '../../css/t/te-137bem.css';
import '../../css/s/ss1975b1y.css';
import '../../css/u/uqpbchbyc.css';
import '../../css/b/b3wp9p47e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgz3smvwr"/><path class="te-137bem"/><path class="ss1975b1y"/><path clip-rule="evenodd" class="uqpbchbyc"/><path clip-rule="evenodd" class="b3wp9p47e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-bold-duotone"} {...others} />);
}

export default Component;
