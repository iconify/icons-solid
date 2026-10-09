import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndtwcqngv.css';
import '../../css/r/rxn3dxbuw.css';
import '../../css/n/nahpy4mwm.css';
import '../../css/o/ofmiloccm.css';
import '../../css/k/k859r6bpa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ndtwcqngv"/><path class="rxn3dxbuw"/><path class="nahpy4mwm"/><path class="ofmiloccm"/><path class="k859r6bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-stop-20"} {...others} />);
}

export default Component;
