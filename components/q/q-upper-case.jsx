import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9f6c35gd.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="k9f6c35gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:q-upper-case"} {...others} />);
}

export default Component;
