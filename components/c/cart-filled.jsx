import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjfqssbtk.css';
import '../../css/s/sm8ol-sel.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rjfqssbtk"/><path class="sm8ol-sel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:cart-filled"} {...others} />);
}

export default Component;
