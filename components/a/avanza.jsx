import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynvcx2b1i.css';

const viewBox = {"width":1549,"height":1881};
const content = `<path class="ynvcx2b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:avanza"} {...others} />);
}

export default Component;
