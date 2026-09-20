import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsexc3bhu.css';
import '../../css/n/n2tq17b1d.css';
import '../../css/w/wwnp4dbvx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wsexc3bhu"/><path class="n2tq17b1d"/><path class="wwnp4dbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mafl"} {...others} />);
}

export default Component;
