import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttatuib8i.css';
import '../../css/j/jdr9a7bii.css';
import '../../css/l/l04bb08wk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttatuib8i"/><path class="jdr9a7bii"/><path class="l04bb08wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:apigee-sense"} {...others} />);
}

export default Component;
