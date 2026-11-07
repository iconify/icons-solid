import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s605fxbhp.css';
import '../../css/f/fvrnvdc0s.css';
import '../../css/n/neb4kjwuq.css';
import '../../css/t/tbmfh8b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s605fxbhp"/><path class="fvrnvdc0s"/><path class="neb4kjwuq"/><path class="tbmfh8b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-waterdrops-bold"} {...others} />);
}

export default Component;
