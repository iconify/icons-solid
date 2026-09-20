import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2c0v3b3a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f2c0v3b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:light-bulb-16"} {...others} />);
}

export default Component;
