import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpuhle7eo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cpuhle7eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:toilet-paper-roll"} {...others} />);
}

export default Component;
