import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg4v4ywuk.css';
import '../../css/g/ghmmfobwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eg4v4ywuk"/><path class="ghmmfobwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workflow-20-bold"} {...others} />);
}

export default Component;
