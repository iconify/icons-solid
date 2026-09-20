import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmmc7xi2d.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="gmmc7xi2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:shopify"} {...others} />);
}

export default Component;
