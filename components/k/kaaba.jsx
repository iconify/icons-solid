import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro1l_sqac.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ro1l_sqac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:kaaba"} {...others} />);
}

export default Component;
