import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bch5yjxyw.css';
import '../../css/j/j6p__-b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bch5yjxyw"/><path clip-rule="evenodd" class="j6p__-b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sun-filled"} {...others} />);
}

export default Component;
