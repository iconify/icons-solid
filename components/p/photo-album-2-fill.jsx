import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjmvz6bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kjmvz6bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:photo-album-2-fill"} {...others} />);
}

export default Component;
