import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2k9crezi.css';
import '../../css/k/koc75zbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2k9crezi"/><path class="koc75zbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-lightning-filled"} {...others} />);
}

export default Component;
