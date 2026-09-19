import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wskxa0ukl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wskxa0ukl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:snews"} {...others} />);
}

export default Component;
