import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf_wfvb6a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lf_wfvb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:atlassian"} {...others} />);
}

export default Component;
