import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8fshfj-z.css';
import '../../css/n/nmroajm4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8fshfj-z"/><path clip-rule="evenodd" class="nmroajm4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:toilet-paper-fill"} {...others} />);
}

export default Component;
