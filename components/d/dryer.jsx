import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doo-tobgu.css';
import '../../css/a/atcuyybgn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doo-tobgu"/><path class="atcuyybgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:dryer"} {...others} />);
}

export default Component;
