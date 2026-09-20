import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpwtk_bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpwtk_bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:unlocked-outline"} {...others} />);
}

export default Component;
