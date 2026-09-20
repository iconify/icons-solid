import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zki1cob0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zki1cob0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:terminal-fill"} {...others} />);
}

export default Component;
