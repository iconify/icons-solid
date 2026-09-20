import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njlcvwq0d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="njlcvwq0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:jp-landmark"} {...others} />);
}

export default Component;
