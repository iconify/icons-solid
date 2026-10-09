import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnj1uyw7u.css';
import '../../css/j/jrg8o7ldv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xnj1uyw7u"/><path class="jrg8o7ldv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graduation-cap-48-bold"} {...others} />);
}

export default Component;
