import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhffk1rfs.css';
import '../../css/w/wd6p9pbhj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jhffk1rfs"/><path class="wd6p9pbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-plus-48-bold"} {...others} />);
}

export default Component;
