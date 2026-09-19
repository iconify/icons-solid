import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjzw_-b3f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wjzw_-b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:dry-normal-no-heat"} {...others} />);
}

export default Component;
