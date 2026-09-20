import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n26s6ub1x.css';
import '../../css/i/iadi1vbcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n26s6ub1x"/><path class="iadi1vbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wikidocs"} {...others} />);
}

export default Component;
