import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-mr8_b6r.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="x-mr8_b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:headphones-slash"} {...others} />);
}

export default Component;
