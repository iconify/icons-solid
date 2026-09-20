import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mei1fbbhq.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="mei1fbbhq"/><path class="a4lo4k5_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:more-circle-vertical"} {...others} />);
}

export default Component;
