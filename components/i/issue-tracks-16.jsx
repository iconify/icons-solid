import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk5hyp-iw.css';
import '../../css/u/ua94ilb2u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mk5hyp-iw"/><path class="ua94ilb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-tracks-16"} {...others} />);
}

export default Component;
