import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixu--sbaj.css';
import '../../css/z/z4gxs_ibg.css';
import '../../css/x/xoi-lebbd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ixu--sbaj"/><path class="z4gxs_ibg"/><path class="xoi-lebbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-alpha-48-bold"} {...others} />);
}

export default Component;
