import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umqx0z94l.css';
import '../../css/p/pru_4-bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umqx0z94l"/><path class="pru_4-bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diagram-up-outline"} {...others} />);
}

export default Component;
