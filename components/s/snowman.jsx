import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2mr-w8gf.css';

const viewBox = {"width":833,"height":1024};
const content = `<path class="v2mr-w8gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:snowman"} {...others} />);
}

export default Component;
