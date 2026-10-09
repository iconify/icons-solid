import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf-lmqboi.css';
import '../../css/c/c8c_oybxb.css';
import '../../css/v/v--izksva.css';
import '../../css/v/vrqg2kbur.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lf-lmqboi"/><path class="c8c_oybxb"/><path class="v--izksva"/><path class="vrqg2kbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sim-card-20-bold"} {...others} />);
}

export default Component;
