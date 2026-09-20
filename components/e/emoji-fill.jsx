import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmx-s5blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmx-s5blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:emoji-fill"} {...others} />);
}

export default Component;
