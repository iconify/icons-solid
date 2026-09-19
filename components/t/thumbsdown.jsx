import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj4k0mbbu.css';
import '../../css/m/mpad8yq0r.css';

const viewBox = {"width":512,"height":470};
const content = `<path class="fj4k0mbbu"/><path class="mpad8yq0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:thumbsdown"} {...others} />);
}

export default Component;
