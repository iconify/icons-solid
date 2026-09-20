import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jef8rhbsn.css';
import '../../css/b/bu7no646v.css';
import '../../css/q/qwkjko7pb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jef8rhbsn"/><path class="bu7no646v"/><path class="qwkjko7pb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pen-sparkles-duotone"} {...others} />);
}

export default Component;
