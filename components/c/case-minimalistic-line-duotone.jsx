import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/whvrg7cyn.css';
import '../../css/b/bq-hnz50z.css';
import '../../css/u/uo3kambic.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="whvrg7cyn"/><path class="bq-hnz50z"/><path class="uo3kambic"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-minimalistic-line-duotone"} {...others} />);
}

export default Component;
