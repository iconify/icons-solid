import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4v6-8p-u.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="s4v6-8p-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:news"} {...others} />);
}

export default Component;
