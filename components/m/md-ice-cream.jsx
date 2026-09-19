import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4dvq9b6o.css';
import '../../css/n/n_2kbbb6m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n4dvq9b6o"/><path class="n_2kbbb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-ice-cream"} {...others} />);
}

export default Component;
