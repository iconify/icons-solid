import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc2fcx.css';
import '../../css/v/v1m4oy.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-6uh96y.css';
import '../../css/d/d-t2f-vz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc2fcx"/><path class="v1m4oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-upload"} {...others} />);
}

export default Component;
