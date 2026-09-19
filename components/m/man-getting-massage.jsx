import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo2ndxdqu.css';
import '../../css/t/t772qacii.css';
import '../../css/z/zaxd0fj5z.css';
import '../../css/e/eyafvfb2a.css';
import '../../css/w/wqf2gykng.css';
import '../../css/k/kmezbgblm.css';
import '../../css/u/uvml26w3a.css';
import '../../css/o/ocagho6oz.css';
import '../../css/t/tw_tkci5p.css';
import '../../css/n/n1jwvnw9n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xo2ndxdqu"/><path class="t772qacii"/><path class="zaxd0fj5z"/><path class="eyafvfb2a"/><path class="wqf2gykng"/><path class="kmezbgblm"/><path class="uvml26w3a"/><path class="ocagho6oz"/><path class="tw_tkci5p"/><path class="n1jwvnw9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-getting-massage"} {...others} />);
}

export default Component;
