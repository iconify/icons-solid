import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdk6xlj0h.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="qdk6xlj0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:circle-thin"} {...others} />);
}

export default Component;
