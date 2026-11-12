import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0bmt8p7x.css';
import '../../css/c/clu__8tmi.css';
import '../../css/v/v3dm0tfsh.css';
import '../../css/j/jwl4-qprl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y0bmt8p7x"/><path class="clu__8tmi"/><path class="v3dm0tfsh"/><path class="jwl4-qprl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tiny-tiny-rss-light"} {...others} />);
}

export default Component;
