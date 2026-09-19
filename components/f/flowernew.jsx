import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0c1x_brt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="h0c1x_brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flowernew"} {...others} />);
}

export default Component;
