import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l2pb8ibam.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';
import '../../css/k/k52rupvjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l2pb8ibam"/><path class="xl-jlp1rp"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/><path class="k52rupvjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-minimalistic-line-duotone"} {...others} />);
}

export default Component;
