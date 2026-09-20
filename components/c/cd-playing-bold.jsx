import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u--3evbhh.css';
import '../../css/l/lseytrb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u--3evbhh"/><path class="lseytrb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cd-playing-bold"} {...others} />);
}

export default Component;
