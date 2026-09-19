import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0pp-x5gd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q0pp-x5gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:symbol-ruler"} {...others} />);
}

export default Component;
