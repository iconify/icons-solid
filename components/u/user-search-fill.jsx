import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrh_nu7ig.css';
import '../../css/l/lq82xlboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrh_nu7ig"/><path clip-rule="evenodd" class="lq82xlboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:user-search-fill"} {...others} />);
}

export default Component;
