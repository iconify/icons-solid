import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-tno59wh.css';
import '../../css/a/aauaucbby.css';
import '../../css/e/entpjs2ed.css';
import '../../css/o/o_w_uobpq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y-tno59wh"/><path class="aauaucbby"/><path class="entpjs2ed"/><path class="o_w_uobpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-chrome"} {...others} />);
}

export default Component;
