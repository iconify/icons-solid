import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmd7zetxe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dmd7zetxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrows-up-down-in-left-right-brackets"} {...others} />);
}

export default Component;
