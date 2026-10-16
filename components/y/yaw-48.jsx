import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu2zepmmt.css';
import '../../css/t/tqfgg-3gm.css';
import '../../css/z/zn068rbjz.css';
import '../../css/t/tlr0lfb8k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wu2zepmmt"/><path class="tqfgg-3gm"/><path class="zn068rbjz"/><path class="tlr0lfb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yaw-48"} {...others} />);
}

export default Component;
