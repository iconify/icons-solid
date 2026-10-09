import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twx0_4--t.css';
import '../../css/s/s9uy0jb1d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="twx0_4--t"/><path class="s9uy0jb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silo-48"} {...others} />);
}

export default Component;
