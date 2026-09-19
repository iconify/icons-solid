import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3-u3ab7s.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="h3-u3ab7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:barcode"} {...others} />);
}

export default Component;
