import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4xxgybar.css';
import '../../css/h/hujkt7abw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4xxgybar"/><path class="hujkt7abw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-upload-filled"} {...others} />);
}

export default Component;
