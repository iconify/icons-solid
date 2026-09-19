import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w32e8gb_h.css';

const viewBox = {"width":1728,"height":1536};
const content = `<path class="w32e8gb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:flag-o"} {...others} />);
}

export default Component;
