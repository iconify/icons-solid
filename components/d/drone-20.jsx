import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abchlonce.css';
import '../../css/q/qmetfmbtm.css';
import '../../css/g/gia1eubje.css';
import '../../css/e/e2y3avbgr.css';
import '../../css/x/x848z0w7x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="abchlonce"/><path class="qmetfmbtm"/><path class="gia1eubje"/><path class="e2y3avbgr"/><path class="x848z0w7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-20"} {...others} />);
}

export default Component;
