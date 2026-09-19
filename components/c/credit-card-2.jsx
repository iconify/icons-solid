import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vu8g70hjm.css';
import '../../css/u/uxqzk2bql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vu8g70hjm"/><rect class="uxqzk2bql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:credit-card-2"} {...others} />);
}

export default Component;
