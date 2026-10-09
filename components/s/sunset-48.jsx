import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-taz-bdu.css';
import '../../css/f/fkg5rrbrr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p-taz-bdu"/><path class="fkg5rrbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunset-48"} {...others} />);
}

export default Component;
