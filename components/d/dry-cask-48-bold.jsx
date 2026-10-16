import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ownw2kb0e.css';
import '../../css/t/t1dfkwo5j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ownw2kb0e"/><path class="t1dfkwo5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dry-cask-48-bold"} {...others} />);
}

export default Component;
