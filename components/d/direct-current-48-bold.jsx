import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guj_uobue.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="guj_uobue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:direct-current-48-bold"} {...others} />);
}

export default Component;
