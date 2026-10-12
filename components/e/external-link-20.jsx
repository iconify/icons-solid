import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqu6-wf_q.css';
import '../../css/f/f4sd7-1jz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dqu6-wf_q"/><path class="f4sd7-1jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:external-link-20"} {...others} />);
}

export default Component;
