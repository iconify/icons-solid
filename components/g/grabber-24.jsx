import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v__r6ltsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v__r6ltsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:grabber-24"} {...others} />);
}

export default Component;
