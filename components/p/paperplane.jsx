import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jki1m8b-z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jki1m8b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:paperplane"} {...others} />);
}

export default Component;
