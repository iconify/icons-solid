import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc-uk6b5e.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="wc-uk6b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:box-closed"} {...others} />);
}

export default Component;
