import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-s5hqb3c.css';
import '../../css/b/bis1pebdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b-s5hqb3c"/><path class="bis1pebdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-minimalistic-outline"} {...others} />);
}

export default Component;
