import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-l2srbfo.css';
import '../../css/n/nj8492k6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-l2srbfo"/><path clip-rule="evenodd" class="nj8492k6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bus-front-filled"} {...others} />);
}

export default Component;
