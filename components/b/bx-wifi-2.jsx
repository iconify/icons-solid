import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3v4iib0v.css';
import '../../css/m/m364hlh3h.css';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3v4iib0v"/><path class="m364hlh3h"/><circle class="l97nb-quh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-wifi-2"} {...others} />);
}

export default Component;
