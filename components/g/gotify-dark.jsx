import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ees4jqgyz.css';

const viewBox = {"width":500,"height":500};
const content = `<path class="ees4jqgyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gotify-dark"} {...others} />);
}

export default Component;
