import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwlbydusy.css';
import '../../css/f/fshg12b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwlbydusy"/><path class="fshg12b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:download-24"} {...others} />);
}

export default Component;
