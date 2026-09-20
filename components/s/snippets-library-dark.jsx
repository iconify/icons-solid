import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa7tb9a1l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fa7tb9a1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snippets-library-dark"} {...others} />);
}

export default Component;
