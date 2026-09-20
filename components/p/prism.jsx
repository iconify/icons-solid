import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-v0owbtv.css';
import '../../css/e/ebu833blj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-v0owbtv"/><path class="ebu833blj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:prism"} {...others} />);
}

export default Component;
