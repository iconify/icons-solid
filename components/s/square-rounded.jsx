import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7xdvfbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7xdvfbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:square-rounded"} {...others} />);
}

export default Component;
