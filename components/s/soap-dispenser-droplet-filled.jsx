import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q86b8g1uw.css';
import '../../css/x/x5qh69bjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q86b8g1uw"/><path clip-rule="evenodd" class="x5qh69bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:soap-dispenser-droplet-filled"} {...others} />);
}

export default Component;
