import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oukk7ab7a.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="oukk7ab7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:kebab-horizontal"} {...others} />);
}

export default Component;
