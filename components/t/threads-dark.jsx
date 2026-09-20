import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih9_-c6ca.css';

const viewBox = {"width":192,"height":192};
const content = `<path class="ih9_-c6ca x19hqcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:threads-dark"} {...others} />);
}

export default Component;
