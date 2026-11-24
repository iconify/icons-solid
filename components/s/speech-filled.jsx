import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqlsd2b2r.css';
import '../../css/a/aepwucb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqlsd2b2r"/><path class="aepwucb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:speech-filled"} {...others} />);
}

export default Component;
