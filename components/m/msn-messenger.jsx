import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2x85_bqr.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="v2x85_bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:msn-messenger"} {...others} />);
}

export default Component;
