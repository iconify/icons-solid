import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bspz8r2wy.css';
import '../../css/s/s-uxakxfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bspz8r2wy"/><path class="s-uxakxfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:verified-24"} {...others} />);
}

export default Component;
