import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j753kt9-h.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="j753kt9-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sports"} {...others} />);
}

export default Component;
