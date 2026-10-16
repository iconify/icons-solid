import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6yz84b5g.css';
import '../../css/e/e2u938bif.css';
import '../../css/f/f1mld5bzp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j6yz84b5g"/><path class="e2u938bif"/><path class="f1mld5bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hinge-48-bold"} {...others} />);
}

export default Component;
