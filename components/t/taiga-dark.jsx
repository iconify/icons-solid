import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyi-blxwk.css';
import '../../css/i/iw8xtjb4w.css';
import '../../css/c/c18_ysapx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zyi-blxwk"/><path class="iw8xtjb4w"/><path class="c18_ysapx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:taiga-dark"} {...others} />);
}

export default Component;
