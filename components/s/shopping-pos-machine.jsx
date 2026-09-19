import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcdw70s4r.css';

const viewBox = {"width":14,"height":24};
const content = `<path class="hcdw70s4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:shopping-pos-machine"} {...others} />);
}

export default Component;
