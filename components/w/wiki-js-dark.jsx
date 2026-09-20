import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1sbn6b6w.css';
import '../../css/c/cgswefbbx.css';
import '../../css/y/yj6-z6b3u.css';
import '../../css/p/pfrpmpb1c.css';
import '../../css/r/r5bsbvxly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z1sbn6b6w"/><path class="cgswefbbx"/><path class="yj6-z6b3u"/><path class="pfrpmpb1c"/><path class="r5bsbvxly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wiki-js-dark"} {...others} />);
}

export default Component;
