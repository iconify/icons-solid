import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc2fcx.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc2fcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt"} {...others} />);
}

export default Component;
