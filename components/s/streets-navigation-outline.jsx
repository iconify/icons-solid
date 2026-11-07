import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0sxd4ipq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d0sxd4ipq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-navigation-outline"} {...others} />);
}

export default Component;
