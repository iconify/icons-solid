import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv82l7bbi.css';
import '../../css/o/ob530gbzg.css';
import '../../css/g/g8n8bnbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zv82l7bbi"/><rect class="ob530gbzg"/><rect class="g8n8bnbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chart-bar-big-columns-filled"} {...others} />);
}

export default Component;
