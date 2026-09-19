import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-f-t5b3k.css';
import '../../css/j/jn6f5yb2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-f-t5b3k"/><path clip-rule="evenodd" class="jn6f5yb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:zoom-in-outline"} {...others} />);
}

export default Component;
