import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1uuebynj.css';
import '../../css/s/se19vpb9a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z1uuebynj"/><path class="se19vpb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-up-48-bold"} {...others} />);
}

export default Component;
