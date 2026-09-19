import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7qk6dbfo.css';

const viewBox = {"width":512,"height":1024};
const content = `<path class="d7qk6dbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:selectionsymbol"} {...others} />);
}

export default Component;
