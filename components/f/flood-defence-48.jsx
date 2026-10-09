import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhdhg5bwh.css';
import '../../css/m/mv8u5hbfo.css';
import '../../css/v/v04mb_kro.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hhdhg5bwh"/><path class="mv8u5hbfo"/><path class="v04mb_kro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flood-defence-48"} {...others} />);
}

export default Component;
