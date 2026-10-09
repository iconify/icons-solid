import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtawmliso.css';
import '../../css/u/ulvnhe8jo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vtawmliso"/><path class="ulvnhe8jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pizza-slice-48"} {...others} />);
}

export default Component;
