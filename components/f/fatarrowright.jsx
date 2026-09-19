import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fimc63bgn.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="fimc63bgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fatarrowright"} {...others} />);
}

export default Component;
