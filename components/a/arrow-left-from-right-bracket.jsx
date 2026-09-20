import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s29wwbcwk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s29wwbcwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-left-from-right-bracket"} {...others} />);
}

export default Component;
