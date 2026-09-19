import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/br4v2hbup.css';
import '../../css/c/cn83yka1u.css';
import '../../css/e/em1xsmxvw.css';
import '../../css/e/ea3emzk3u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="br4v2hbup"/><path clip-rule="evenodd" class="cn83yka1u"/><path clip-rule="evenodd" class="em1xsmxvw"/><path class="ea3emzk3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:map-print"} {...others} />);
}

export default Component;
