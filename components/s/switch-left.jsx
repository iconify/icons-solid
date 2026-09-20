import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_3us-pxg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};
const content = `<path class="w_3us-pxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:switch-left"} {...others} />);
}

export default Component;
