import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jiv891-qv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jiv891-qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-r-bulk-round"} {...others} />);
}

export default Component;
