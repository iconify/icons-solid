import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jedolt31x.css';
import '../../css/w/wdqxtccbr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jedolt31x"/><path class="wdqxtccbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:remoteterm"} {...others} />);
}

export default Component;
