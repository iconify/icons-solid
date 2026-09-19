import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj7gj486n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="aj7gj486n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pixelbroadsword"} {...others} />);
}

export default Component;
