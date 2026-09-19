import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv82l7bbi.css';
import '../../css/a/arue7cbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b zv82l7bbi"/><path class="arue7cbqf b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chart-network"} {...others} />);
}

export default Component;
