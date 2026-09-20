import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j65g2nbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j65g2nbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:angel-fill"} {...others} />);
}

export default Component;
