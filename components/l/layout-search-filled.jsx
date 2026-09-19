import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhbvqjyxk.css';
import '../../css/g/gyghflb6y.css';
import '../../css/j/j64dr1bxs.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="bhbvqjyxk"/><path class="gyghflb6y"/><rect class="j64dr1bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layout-search-filled"} {...others} />);
}

export default Component;
