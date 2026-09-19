import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5zy_5-qj.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="f5zy_5-qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squarequora"} {...others} />);
}

export default Component;
