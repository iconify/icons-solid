import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjq2w1_ae.css';
import '../../css/n/nbgk0wbrq.css';
import '../../css/d/dj35aibbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjq2w1_ae"/><path class="nbgk0wbrq"/><path class="dj35aibbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:people-nearby-bold-duotone"} {...others} />);
}

export default Component;
