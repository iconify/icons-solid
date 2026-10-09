import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9t00gb6u.css';
import '../../css/u/ujj6t-i1r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9t00gb6u"/><path class="ujj6t-i1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-48"} {...others} />);
}

export default Component;
