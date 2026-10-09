import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t26y-qb5e.css';
import '../../css/p/p6e6b6d8e.css';
import '../../css/v/v03b8abeb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t26y-qb5e"/><path class="p6e6b6d8e"/><path class="v03b8abeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shuffle-48-bold"} {...others} />);
}

export default Component;
