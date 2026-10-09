import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay0q9u-4z.css';
import '../../css/q/q4-w0wbwt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ay0q9u-4z"/><path class="q4-w0wbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-dog-48"} {...others} />);
}

export default Component;
