import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo0uuy-7w.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="oo0uuy-7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:cloudapp"} {...others} />);
}

export default Component;
