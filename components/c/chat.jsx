import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0vh8rd7c.css';
import '../../css/g/go-hdki3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0vh8rd7c"/><path class="go-hdki3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:chat"} {...others} />);
}

export default Component;
