import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq95s7sjx.css';
import '../../css/g/gpq-8xbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq95s7sjx"/><path class="gpq-8xbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-bag-duty-free"} {...others} />);
}

export default Component;
