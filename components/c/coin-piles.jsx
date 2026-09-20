import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cedsxbbuw.css';
import '../../css/v/vvu8i0bac.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cedsxbbuw"/><path class="vvu8i0bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:coin-piles"} {...others} />);
}

export default Component;
