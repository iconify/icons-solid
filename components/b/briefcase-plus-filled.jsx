import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj2tc7b5c.css';
import '../../css/z/zoxpwbb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tj2tc7b5c"/><path class="zoxpwbb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:briefcase-plus-filled"} {...others} />);
}

export default Component;
