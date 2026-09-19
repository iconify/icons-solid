import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz1ow95wt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oz1ow95wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-badge-dollar"} {...others} />);
}

export default Component;
