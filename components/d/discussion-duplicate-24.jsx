import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l60ur6bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l60ur6bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:discussion-duplicate-24"} {...others} />);
}

export default Component;
