import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbb5sxb8o.css';
import '../../css/g/g74pk9c5p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mbb5sxb8o"/><path class="g74pk9c5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microplastics-48-bold"} {...others} />);
}

export default Component;
