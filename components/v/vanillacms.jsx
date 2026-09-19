import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1bf2ch-l.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="n1bf2ch-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:vanillacms"} {...others} />);
}

export default Component;
