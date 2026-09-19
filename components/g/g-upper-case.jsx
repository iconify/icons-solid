import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u189c4bon.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="u189c4bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:g-upper-case"} {...others} />);
}

export default Component;
