import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzp-x3bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzp-x3bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:shield-outline"} {...others} />);
}

export default Component;
