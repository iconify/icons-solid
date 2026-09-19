import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp2ifdcbr.css';
import '../../css/b/b2kor1dzx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bp2ifdcbr"/><path class="b2kor1dzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:chat-dot-round"} {...others} />);
}

export default Component;
