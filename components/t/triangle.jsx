import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8u8d-z0k.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};
const content = `<path class="x8u8d-z0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:triangle"} {...others} />);
}

export default Component;
