import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0qpmvhbh.css';
import '../../css/x/xysj39n-m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="s0qpmvhbh"/><path class="xysj39n-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:digitalocean"} {...others} />);
}

export default Component;
