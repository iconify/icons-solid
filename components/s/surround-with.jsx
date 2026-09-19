import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0q9ccqak.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f0q9ccqak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:surround-with"} {...others} />);
}

export default Component;
