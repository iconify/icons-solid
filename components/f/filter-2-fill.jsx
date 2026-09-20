import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9g9lhbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f9g9lhbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:filter-2-fill"} {...others} />);
}

export default Component;
