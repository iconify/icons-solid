import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx9_9iq6d.css';
import '../../css/e/eumf_hb7z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lx9_9iq6d"/><path class="eumf_hb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-20-bold"} {...others} />);
}

export default Component;
