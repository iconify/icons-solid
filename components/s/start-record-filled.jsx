import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd5-fzb7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd5-fzb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:start-record-filled"} {...others} />);
}

export default Component;
