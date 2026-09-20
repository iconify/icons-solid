import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edz9rxbaf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="edz9rxbaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:railway-track-crossing-striped-line"} {...others} />);
}

export default Component;
