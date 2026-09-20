import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i6spdsbgb.css';
import '../../css/r/rm9mgg4hf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i6spdsbgb"/><path class="rm9mgg4hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-horizontal-broken"} {...others} />);
}

export default Component;
