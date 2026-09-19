import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueziy6bic.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ueziy6bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:hand-lizard"} {...others} />);
}

export default Component;
