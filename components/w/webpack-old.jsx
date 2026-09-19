import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9rnf9u2e.css';

const viewBox = {"width":450,"height":512};
const content = `<path class="m9rnf9u2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:webpack-old"} {...others} />);
}

export default Component;
