import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehhu9f5ds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehhu9f5ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-right-top-arrow-circle"} {...others} />);
}

export default Component;
