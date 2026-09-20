import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5v3h_0wx.css';
import '../../css/h/ht7jy51cn.css';
import '../../css/w/w14eijbgv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x5v3h_0wx"/><path class="ht7jy51cn"/><path class="w14eijbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:truenas-scale"} {...others} />);
}

export default Component;
