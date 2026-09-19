import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omgkdvbjr.css';

const viewBox = {"width":2048,"height":1408};
const content = `<path class="omgkdvbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:jsfiddle"} {...others} />);
}

export default Component;
