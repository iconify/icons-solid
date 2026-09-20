import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5qbu8lof.css';
import '../../css/c/ca82trbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b5qbu8lof"/><path class="ca82trbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:swimming-pool-fill"} {...others} />);
}

export default Component;
