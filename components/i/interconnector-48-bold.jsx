import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aofe76cbq.css';
import '../../css/g/gxgezbb4t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aofe76cbq"/><path class="gxgezbb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:interconnector-48-bold"} {...others} />);
}

export default Component;
