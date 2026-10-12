import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_vsq7l3i.css';
import '../../css/c/c375mewhe.css';
import '../../css/h/hgjylxpyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="c375mewhe"/><path clip-rule="evenodd" class="hgjylxpyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pin-search-filled"} {...others} />);
}

export default Component;
