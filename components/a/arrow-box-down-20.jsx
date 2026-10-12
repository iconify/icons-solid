import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqgrzwrtu.css';
import '../../css/j/jahmehbul.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eqgrzwrtu"/><path class="jahmehbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-box-down-20"} {...others} />);
}

export default Component;
