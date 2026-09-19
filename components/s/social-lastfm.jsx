import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx3qosbio.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="tx3qosbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-lastfm"} {...others} />);
}

export default Component;
