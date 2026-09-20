import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj9bm4bnw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cj9bm4bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:server-solid"} {...others} />);
}

export default Component;
