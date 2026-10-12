import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuuehgbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xuuehgbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cake-slice-filled"} {...others} />);
}

export default Component;
