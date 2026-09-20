import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4_4fcbps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e4_4fcbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:spark-line"} {...others} />);
}

export default Component;
