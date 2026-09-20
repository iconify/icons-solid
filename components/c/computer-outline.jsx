import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilv9ww7ih.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ilv9ww7ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:computer-outline"} {...others} />);
}

export default Component;
