import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syqfetb6n.css';
import '../../css/l/lkky-nhlk.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="syqfetb6n"/><path class="lkky-nhlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:camera"} {...others} />);
}

export default Component;
