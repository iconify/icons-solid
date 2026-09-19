import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie9k28r9w.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ie9k28r9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:bookmark-poi"} {...others} />);
}

export default Component;
