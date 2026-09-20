import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aznfn1s6e.css';
import '../../css/y/ylok2ab9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aznfn1s6e"/><path class="ylok2ab9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ironcalc"} {...others} />);
}

export default Component;
