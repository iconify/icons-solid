import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcozblb4e.css';
import '../../css/y/yl94r0wtm.css';
import '../../css/p/priknnbhf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tcozblb4e"/><path class="yl94r0wtm"/><path class="priknnbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:logwell-light"} {...others} />);
}

export default Component;
