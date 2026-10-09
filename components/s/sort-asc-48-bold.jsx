import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b97769rea.css';
import '../../css/n/nssl3jbor.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b97769rea"/><path class="nssl3jbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-asc-48-bold"} {...others} />);
}

export default Component;
