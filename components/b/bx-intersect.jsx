import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bab7g1bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bab7g1bhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-intersect"} {...others} />);
}

export default Component;
