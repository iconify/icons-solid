import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm1d98grv.css';
import '../../css/r/rgiy7zbva.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lm1d98grv"/><path class="rgiy7zbva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:flip-v"} {...others} />);
}

export default Component;
