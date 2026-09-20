import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi3l8-bkb.css';
import '../../css/r/rpkswgq3h.css';
import '../../css/d/dujhcdcuw.css';
import '../../css/r/rgq401bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zi3l8-bkb"/><circle class="rpkswgq3h"/><circle class="dujhcdcuw"/><circle class="rgq401bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-alt-3"} {...others} />);
}

export default Component;
