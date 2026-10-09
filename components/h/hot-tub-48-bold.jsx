import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lelyizmit.css';
import '../../css/s/spkgakbtd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lelyizmit"/><path class="spkgakbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-tub-48-bold"} {...others} />);
}

export default Component;
