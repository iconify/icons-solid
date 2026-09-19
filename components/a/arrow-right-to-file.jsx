import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mph4c5b3i.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="mph4c5b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:arrow-right-to-file"} {...others} />);
}

export default Component;
