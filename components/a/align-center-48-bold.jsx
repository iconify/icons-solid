import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2h5hoimy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d2h5hoimy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-center-48-bold"} {...others} />);
}

export default Component;
