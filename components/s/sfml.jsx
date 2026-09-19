import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rldz3bb1z.css';
import '../../css/w/wdrk3cy4t.css';
import '../../css/p/p8wh8o_bf.css';
import '../../css/s/s0qlh1b2c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rldz3bb1z"/><path class="wdrk3cy4t"/><path class="p8wh8o_bf"/><path class="s0qlh1b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sfml"} {...others} />);
}

export default Component;
