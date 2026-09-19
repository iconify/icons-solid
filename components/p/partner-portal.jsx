import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/z/zg_xfubcu.css';
import '../../css/z/z98wavxds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="zg_xfubcu"/><path class="z98wavxds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:partner-portal"} {...others} />);
}

export default Component;
