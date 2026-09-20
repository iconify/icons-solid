import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrw8l6u1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrw8l6u1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:xbox-live-logo"} {...others} />);
}

export default Component;
