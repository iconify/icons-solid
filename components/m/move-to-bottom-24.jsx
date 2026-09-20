import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6pvk5uvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6pvk5uvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:move-to-bottom-24"} {...others} />);
}

export default Component;
