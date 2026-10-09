import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djc8x4bhg.css';
import '../../css/i/i24xrk73t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="djc8x4bhg"/><path class="i24xrk73t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saf-48-bold"} {...others} />);
}

export default Component;
