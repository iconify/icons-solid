import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw4mfbbve.css';
import '../../css/i/iz0jpn4au.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tw4mfbbve"/><path class="iz0jpn4au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-pen-line-filled"} {...others} />);
}

export default Component;
