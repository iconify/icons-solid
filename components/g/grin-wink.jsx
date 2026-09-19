import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxboa__7l.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="nxboa__7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:grin-wink"} {...others} />);
}

export default Component;
