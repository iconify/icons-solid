import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7aw6lb_z.css';
import '../../css/b/b9njywbbk.css';
import '../../css/u/uyyqc0_4u.css';
import '../../css/t/tyapp0bst.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c7aw6lb_z"/><path class="b9njywbbk"/><path class="uyyqc0_4u"/><path class="tyapp0bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pushpin-48-bold"} {...others} />);
}

export default Component;
