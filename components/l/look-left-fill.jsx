import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq7jedb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vq7jedb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:look-left-fill"} {...others} />);
}

export default Component;
