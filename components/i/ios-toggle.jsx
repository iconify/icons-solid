import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atoj6abie.css';
import '../../css/y/yo0y45bgr.css';
import '../../css/v/vcmsx7koy.css';
import '../../css/g/gsi6ambhf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="atoj6abie"/><path class="yo0y45bgr"/><path class="vcmsx7koy"/><path class="gsi6ambhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-toggle"} {...others} />);
}

export default Component;
