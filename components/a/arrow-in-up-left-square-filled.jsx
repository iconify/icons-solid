import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc17l7bwn.css';
import '../../css/z/zar1cn4so.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc17l7bwn"/><path class="zar1cn4so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-left-square-filled"} {...others} />);
}

export default Component;
