import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7s431bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7s431bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:saving-money-flower-bold"} {...others} />);
}

export default Component;
