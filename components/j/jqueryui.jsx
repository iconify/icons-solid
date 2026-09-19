import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw8kqebtz.css';

const viewBox = {"width":1025,"height":896};
const content = `<path class="fw8kqebtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:jqueryui"} {...others} />);
}

export default Component;
