import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr2dbacrr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rr2dbacrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:user-lock-solid"} {...others} />);
}

export default Component;
