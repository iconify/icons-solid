import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5cz3ibue.css';
import '../../css/g/gk_j4gbvi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x5cz3ibue"/><path class="gk_j4gbvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-off-fill-16"} {...others} />);
}

export default Component;
