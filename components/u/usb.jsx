import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmlps6b0t.css';
import '../../css/w/wt0pcikiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmlps6b0t"/><path class="wt0pcikiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:usb"} {...others} />);
}

export default Component;
