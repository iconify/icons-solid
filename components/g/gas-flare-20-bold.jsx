import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id95kqb4w.css';
import '../../css/a/a8ioorcne.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="id95kqb4w"/><path class="a8ioorcne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-flare-20-bold"} {...others} />);
}

export default Component;
