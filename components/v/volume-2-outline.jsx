import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsds9abwl.css';
import '../../css/i/ixvh0acwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tsds9abwl"/><path clip-rule="evenodd" class="ixvh0acwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:volume-2-outline"} {...others} />);
}

export default Component;
