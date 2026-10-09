import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyzyqw1hp.css';
import '../../css/k/ko4o_xbkk.css';
import '../../css/o/ol_xz9rkq.css';
import '../../css/g/ghl2m9vtv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uyzyqw1hp"/><path class="ko4o_xbkk"/><path class="ol_xz9rkq"/><path class="ghl2m9vtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-plus-20-bold"} {...others} />);
}

export default Component;
