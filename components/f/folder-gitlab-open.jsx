import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k51-r1btv.css';
import '../../css/l/lhgt1qzum.css';
import '../../css/m/m023sbovp.css';
import '../../css/f/fyazefb-a.css';
import '../../css/o/oz3vbfwze.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k51-r1btv"/><path class="lhgt1qzum"/><path class="m023sbovp"/><path class="fyazefb-a"/><path class="oz3vbfwze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-gitlab-open"} {...others} />);
}

export default Component;
