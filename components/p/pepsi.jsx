import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvviu06qs.css';
import '../../css/w/wc7y-bc1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvviu06qs"/><path class="wc7y-bc1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:pepsi"} {...others} />);
}

export default Component;
