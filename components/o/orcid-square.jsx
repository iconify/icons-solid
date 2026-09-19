import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq1zmjr3e.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="rq1zmjr3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:orcid-square"} {...others} />);
}

export default Component;
