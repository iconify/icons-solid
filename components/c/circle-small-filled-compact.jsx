import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhxqb1l5k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fhxqb1l5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:circle-small-filled-compact"} {...others} />);
}

export default Component;
