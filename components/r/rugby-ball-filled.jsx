import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t01_zdb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t01_zdb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rugby-ball-filled"} {...others} />);
}

export default Component;
