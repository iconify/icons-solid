import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmoyvb9wf.css';
import '../../css/j/je2hmjd-t.css';
import '../../css/k/k5w5kdbbu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vmoyvb9wf"/><path class="je2hmjd-t"/><path class="k5w5kdbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:running-48-bold"} {...others} />);
}

export default Component;
