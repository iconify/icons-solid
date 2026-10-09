import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db2i7lbka.css';
import '../../css/p/p64m754zz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="db2i7lbka"/><path class="p64m754zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:towels-48-bold"} {...others} />);
}

export default Component;
