import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd-v9xn1m.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="fd-v9xn1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:sad-tear"} {...others} />);
}

export default Component;
