import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1gf99bah.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u1gf99bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:curved-connector-solid"} {...others} />);
}

export default Component;
