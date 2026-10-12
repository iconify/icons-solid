import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xaxmjgbje.css';
import '../../css/o/ofusmvbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xaxmjgbje"/><path class="ofusmvbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-output-filled"} {...others} />);
}

export default Component;
