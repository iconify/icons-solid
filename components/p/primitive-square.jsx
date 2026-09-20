import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j00zp6u7c.css';

const viewBox = {"width":8,"height":16};
const content = `<path class="j00zp6u7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:primitive-square"} {...others} />);
}

export default Component;
