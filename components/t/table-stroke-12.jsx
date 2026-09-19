import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9nk1jhad.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="f9nk1jhad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:table-stroke-12"} {...others} />);
}

export default Component;
