import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx_bzmb5r.css';
import '../../css/w/wg9upwoxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qx_bzmb5r"/><path clip-rule="evenodd" class="wg9upwoxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:shakers-24"} {...others} />);
}

export default Component;
