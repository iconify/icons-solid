import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezqsr36tr.css';
import '../../css/n/n2nlvdnrj.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ezqsr36tr"/><path class="n2nlvdnrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ghstats"} {...others} />);
}

export default Component;
