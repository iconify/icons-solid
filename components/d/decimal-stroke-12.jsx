import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqnp4cb9p.css';
import '../../css/q/q0c7o4bad.css';

const viewBox = {"width":12,"height":12};
const content = `<ellipse class="nqnp4cb9p"/><circle class="q0c7o4bad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:decimal-stroke-12"} {...others} />);
}

export default Component;
