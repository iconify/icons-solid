import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzv9pj7uf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzv9pj7uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:slideshow"} {...others} />);
}

export default Component;
