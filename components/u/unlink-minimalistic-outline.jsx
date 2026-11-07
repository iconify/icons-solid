import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrx842ghz.css';
import '../../css/b/bn7lz4bua.css';
import '../../css/q/qs-2wmzej.css';
import '../../css/w/wg-y_1byw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrx842ghz"/><path class="bn7lz4bua"/><path class="qs-2wmzej"/><path class="wg-y_1byw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-minimalistic-outline"} {...others} />);
}

export default Component;
