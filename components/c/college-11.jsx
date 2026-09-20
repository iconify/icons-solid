import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2yme1wsh.css';
import '../../css/w/wyg7xl8ps.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="z2yme1wsh"/><path class="wyg7xl8ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:college-11"} {...others} />);
}

export default Component;
