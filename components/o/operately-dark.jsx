import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw8tm-bwd.css';
import '../../css/u/u-8cambew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pw8tm-bwd"/><path class="u-8cambew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:operately-dark"} {...others} />);
}

export default Component;
