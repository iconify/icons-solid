import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de63-bcoq.css';
import '../../css/g/gmk8tebem.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="de63-bcoq"/><path class="gmk8tebem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:noise-reduction-48-bold"} {...others} />);
}

export default Component;
