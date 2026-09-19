import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya-nlsbkm.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ya-nlsbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squaresearch"} {...others} />);
}

export default Component;
