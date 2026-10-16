import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osf7zog9q.css';
import '../../css/h/h818ewufo.css';
import '../../css/k/krsiqfbpt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="osf7zog9q"/><path class="h818ewufo"/><path class="krsiqfbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tokamak-48-bold"} {...others} />);
}

export default Component;
