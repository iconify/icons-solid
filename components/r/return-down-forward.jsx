import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmbxl9aac.css';
import '../../css/z/z7rr8ngug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dmbxl9aac"/><path class="z7rr8ngug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:return-down-forward"} {...others} />);
}

export default Component;
