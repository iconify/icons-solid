import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-jkv8bwc.css';
import '../../css/p/pgweqn4hi.css';
import '../../css/a/ab8n2w_il.css';
import '../../css/a/asbtooboc.css';
import '../../css/l/l350y_b3f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b-jkv8bwc"/><path class="pgweqn4hi"/><path class="ab8n2w_il"/><path class="asbtooboc"/><path class="l350y_b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ebay"} {...others} />);
}

export default Component;
