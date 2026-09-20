import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/raj7bybid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="raj7bybid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:people-24"} {...others} />);
}

export default Component;
