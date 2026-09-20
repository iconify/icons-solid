import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt6oj8b5t.css';
import '../../css/z/zdpv8zbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt6oj8b5t"/><path class="zdpv8zbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:project-check-24"} {...others} />);
}

export default Component;
