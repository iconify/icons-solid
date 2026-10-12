import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt1b-ybwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt1b-ybwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wave-sawtooth"} {...others} />);
}

export default Component;
