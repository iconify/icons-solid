import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8sn5607z.css';
import '../../css/p/puqsb9b7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8sn5607z"/><path class="puqsb9b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-open-filled"} {...others} />);
}

export default Component;
