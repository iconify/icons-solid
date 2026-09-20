import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuc4qxb-w.css';
import '../../css/n/n3l1s8lfb.css';
import '../../css/g/gy3y47_du.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yuc4qxb-w"/><path class="n3l1s8lfb"/><path class="gy3y47_du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aliexpress"} {...others} />);
}

export default Component;
