import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st-nb-bnw.css';
import '../../css/t/tiq8xcncs.css';
import '../../css/i/irdsaebul.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="st-nb-bnw"/><path class="tiq8xcncs"/><path class="irdsaebul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:megaphone-20"} {...others} />);
}

export default Component;
