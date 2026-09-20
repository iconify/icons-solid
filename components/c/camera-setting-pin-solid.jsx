import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0brwl0fr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h0brwl0fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:camera-setting-pin-solid"} {...others} />);
}

export default Component;
