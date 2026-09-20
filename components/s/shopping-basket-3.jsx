import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxa1xlbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxa1xlbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-basket-3"} {...others} />);
}

export default Component;
