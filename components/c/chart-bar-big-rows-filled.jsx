import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv82l7bbi.css';
import '../../css/b/b24lpe48b.css';
import '../../css/y/ya4lqabet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zv82l7bbi"/><rect class="b24lpe48b"/><rect class="ya4lqabet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chart-bar-big-rows-filled"} {...others} />);
}

export default Component;
