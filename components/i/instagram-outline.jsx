import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be-x2lgok.css';
import '../../css/j/j0991s5ot.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be-x2lgok"/><path clip-rule="evenodd" class="j0991s5ot"/><path clip-rule="evenodd" class="daxtkab1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:instagram-outline"} {...others} />);
}

export default Component;
