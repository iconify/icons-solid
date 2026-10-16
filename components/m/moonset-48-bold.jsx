import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpp3nrb8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hpp3nrb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moonset-48-bold"} {...others} />);
}

export default Component;
