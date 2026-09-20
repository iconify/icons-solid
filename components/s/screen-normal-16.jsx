import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdi992bfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fdi992bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:screen-normal-16"} {...others} />);
}

export default Component;
