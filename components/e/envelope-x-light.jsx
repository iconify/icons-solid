import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7o99qb7p.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="y7o99qb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:envelope-x-light"} {...others} />);
}

export default Component;
