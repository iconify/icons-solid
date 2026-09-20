import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_i801t3n.css';
import '../../css/l/l2d53np2e.css';
import '../../css/v/vnqx6r6he.css';

const viewBox = {"width":151,"height":170,"left":-57.38,"top":-64.6};
const content = `<path class="r_i801t3n"/><path class="l2d53np2e"/><path class="vnqx6r6he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hero-motocorp"} {...others} />);
}

export default Component;
