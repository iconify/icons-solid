import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh14zko1u.css';
import '../../css/u/uouny_b5s.css';
import '../../css/p/pnj4t1rqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh14zko1u"/><path class="uouny_b5s"/><path class="pnj4t1rqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:crop"} {...others} />);
}

export default Component;
