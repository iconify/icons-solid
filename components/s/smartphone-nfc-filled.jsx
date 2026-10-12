import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkvkheb0s.css';
import '../../css/c/ci5ggcbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkvkheb0s"/><path class="ci5ggcbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:smartphone-nfc-filled"} {...others} />);
}

export default Component;
