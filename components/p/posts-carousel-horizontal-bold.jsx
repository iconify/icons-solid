import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st24108fl.css';
import '../../css/g/gn6fo9ori.css';
import '../../css/p/pqifm1b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="st24108fl"/><path class="gn6fo9ori"/><path class="pqifm1b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-bold"} {...others} />);
}

export default Component;
