import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a92_184ww.css';
import '../../css/m/miymqckna.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a92_184ww"/><path class="miymqckna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:qr-code-filled"} {...others} />);
}

export default Component;
