import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0uh53i7f.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="m0uh53i7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:text-wrap-slash-thin"} {...others} />);
}

export default Component;
