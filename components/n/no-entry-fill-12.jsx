import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2jbinb3y.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="u2jbinb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:no-entry-fill-12"} {...others} />);
}

export default Component;
