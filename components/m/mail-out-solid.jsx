import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bil7h4hxb.css';
import '../../css/k/k0v0v9boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bil7h4hxb"/><path clip-rule="evenodd" class="k0v0v9boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mail-out-solid"} {...others} />);
}

export default Component;
