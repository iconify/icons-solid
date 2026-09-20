import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb03xai3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jb03xai3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-x-sharp-fill"} {...others} />);
}

export default Component;
