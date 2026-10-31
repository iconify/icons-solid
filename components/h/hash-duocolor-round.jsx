import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv7d-qbri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv7d-qbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hash-duocolor-round"} {...others} />);
}

export default Component;
