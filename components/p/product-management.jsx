import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkmclvb3d.css';
import '../../css/a/acxt2achp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zkmclvb3d"/><path class="acxt2achp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:product-management"} {...others} />);
}

export default Component;
