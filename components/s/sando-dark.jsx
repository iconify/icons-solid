import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh1d8hbja.css';
import '../../css/p/p6gi491tx.css';
import '../../css/b/bk36q5c0k.css';
import '../../css/a/alcx3ebvo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wh1d8hbja"/><path class="p6gi491tx"/><path class="bk36q5c0k"/><path class="alcx3ebvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sando-dark"} {...others} />);
}

export default Component;
