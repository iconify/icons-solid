import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d1rcu7d8h.css';
import '../../css/e/eox6dq53k.css';
import '../../css/k/kah-p9bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d1rcu7d8h"/><path class="eox6dq53k"/><path class="kah-p9bbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-center-line-duotone"} {...others} />);
}

export default Component;
