import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc46o1p0z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xc46o1p0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insurance-48-bold"} {...others} />);
}

export default Component;
