import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvy6d57rr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xvy6d57rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:marketing-outline"} {...others} />);
}

export default Component;
