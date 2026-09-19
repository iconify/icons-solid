import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/o/ok5a-4evb.css';
import '../../css/s/skzxnomci.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="ok5a-4evb"/><path class="skzxnomci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:close-o"} {...others} />);
}

export default Component;
