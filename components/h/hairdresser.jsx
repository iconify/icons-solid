import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weokkbcgc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="weokkbcgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:hairdresser"} {...others} />);
}

export default Component;
