import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo2-g_b4a.css';

const viewBox = {"width":64,"height":64};
const content = `<path clip-rule="evenodd" class="oo2-g_b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:play-store-alt"} {...others} />);
}

export default Component;
