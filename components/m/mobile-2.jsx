import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj0nwob6o.css';
import '../../css/d/dake0_b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="nj0nwob6o"/><path class="dake0_b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:mobile-2"} {...others} />);
}

export default Component;
