import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihdvcd13a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ihdvcd13a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scan-48-bold"} {...others} />);
}

export default Component;
