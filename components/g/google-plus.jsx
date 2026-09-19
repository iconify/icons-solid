import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0ijd5bxg.css';

const viewBox = {"width":2304,"height":1472};
const content = `<path class="u0ijd5bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:google-plus"} {...others} />);
}

export default Component;
