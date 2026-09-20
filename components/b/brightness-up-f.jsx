import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh4h_-bmp.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<path class="yh4h_-bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:brightness-up-f"} {...others} />);
}

export default Component;
