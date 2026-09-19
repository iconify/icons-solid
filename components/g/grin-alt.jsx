import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4v37gz8j.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="g4v37gz8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:grin-alt"} {...others} />);
}

export default Component;
