import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwfyp4bla.css';
import '../../css/a/a8y66z8px.css';
import '../../css/s/scdo1np3u.css';
import '../../css/h/h9tztfwwx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lwfyp4bla"/><path class="a8y66z8px"/><path class="scdo1np3u"/><path class="h9tztfwwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:installatron"} {...others} />);
}

export default Component;
