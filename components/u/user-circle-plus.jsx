import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9cxjxbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9cxjxbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:user-circle-plus"} {...others} />);
}

export default Component;
