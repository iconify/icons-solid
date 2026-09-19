import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3p6v5b5g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f3p6v5b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-stroke-16"} {...others} />);
}

export default Component;
