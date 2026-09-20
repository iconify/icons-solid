import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upyruzb_p.css';
import '../../css/l/lnp8jkb8z.css';
import '../../css/y/yyfkiabuo.css';
import '../../css/r/r_-7497pi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="upyruzb_p"/><path class="lnp8jkb8z"/><path class="ouiIcon__fillSecondary yyfkiabuo"/><path class="r_-7497pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-index-rollup"} {...others} />);
}

export default Component;
