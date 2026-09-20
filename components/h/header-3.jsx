import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoc34syxh.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-6.5};
const content = `<path class="xoc34syxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:header-3"} {...others} />);
}

export default Component;
