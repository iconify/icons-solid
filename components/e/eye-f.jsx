import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzeek6plg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="mzeek6plg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:eye-f"} {...others} />);
}

export default Component;
