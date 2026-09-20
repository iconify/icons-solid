import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a35c9ac7a.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="a35c9ac7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:crossed"} {...others} />);
}

export default Component;
