import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elzab8bky.css';
import '../../css/f/funyg-b4n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="elzab8bky"/><path class="funyg-b4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:continuwuity-light"} {...others} />);
}

export default Component;
