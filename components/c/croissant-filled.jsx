import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts7g1fbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ts7g1fbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:croissant-filled"} {...others} />);
}

export default Component;
