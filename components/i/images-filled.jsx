import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjmqsobna.css';
import '../../css/n/nlx7eybis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pjmqsobna"/><path clip-rule="evenodd" class="nlx7eybis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:images-filled"} {...others} />);
}

export default Component;
