import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj9rz1bku.css';
import '../../css/n/ni01k9bte.css';
import '../../css/q/q5q14ccnk.css';
import '../../css/l/l87gg1umh.css';
import '../../css/a/afb15p7wi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gj9rz1bku"/><path class="ni01k9bte"/><path class="q5q14ccnk"/><path class="l87gg1umh"/><path class="afb15p7wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kavita"} {...others} />);
}

export default Component;
