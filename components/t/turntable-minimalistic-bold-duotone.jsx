import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhwu8ubva.css';
import '../../css/y/yp9zqabqo.css';
import '../../css/y/yerjxhd7f.css';
import '../../css/c/c1ao83bub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uhwu8ubva"/><path class="yp9zqabqo"/><path class="yerjxhd7f"/><path class="c1ao83bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
