import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7wvp7oxw.css';
import '../../css/s/s4dgi_7mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7wvp7oxw"/><path class="s4dgi_7mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-x-2-filled"} {...others} />);
}

export default Component;
