import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmrrr4bud.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pmrrr4bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sparkle-stroke-16"} {...others} />);
}

export default Component;
