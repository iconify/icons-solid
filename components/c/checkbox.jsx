import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/expt5jbwi.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="expt5jbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:checkbox"} {...others} />);
}

export default Component;
