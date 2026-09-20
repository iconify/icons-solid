import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmyk-nbco.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fmyk-nbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:close-small-outline"} {...others} />);
}

export default Component;
