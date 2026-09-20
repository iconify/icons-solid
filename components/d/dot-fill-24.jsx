import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qni8_cbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qni8_cbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:dot-fill-24"} {...others} />);
}

export default Component;
