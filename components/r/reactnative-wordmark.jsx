import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0e93lbtk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u0e93lbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:reactnative-wordmark"} {...others} />);
}

export default Component;
