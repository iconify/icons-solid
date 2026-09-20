import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leb8g0bak.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="leb8g0bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:fast-backward-circle-f"} {...others} />);
}

export default Component;
