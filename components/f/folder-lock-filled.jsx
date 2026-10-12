import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n913frb6j.css';
import '../../css/o/oxtj35b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n913frb6j"/><path class="oxtj35b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-lock-filled"} {...others} />);
}

export default Component;
