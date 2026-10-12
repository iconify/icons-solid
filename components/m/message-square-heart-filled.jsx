import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzhh08_zc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pzhh08_zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-square-heart-filled"} {...others} />);
}

export default Component;
