import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3v3u4bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3v3u4bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fold-vertical-fill"} {...others} />);
}

export default Component;
