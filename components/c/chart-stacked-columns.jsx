import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv82l7bbi.css';
import '../../css/a/a-xt3ogtu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zv82l7bbi"/><path class="a-xt3ogtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chart-stacked-columns"} {...others} />);
}

export default Component;
