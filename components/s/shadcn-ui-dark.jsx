import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1us_l5nc.css';
import '../../css/f/fd1zf2m-n.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="g1us_l5nc"/><path class="fd1zf2m-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:shadcn-ui-dark"} {...others} />);
}

export default Component;
