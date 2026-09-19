import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/yjj0ifbsc.css';
import '../../css/o/on8g54jyb.css';
import '../../css/z/z9pplacng.css';
import '../../css/e/ed-ld3b8q.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="yjj0ifbsc"/><path class="on8g54jyb"/><path class="z9pplacng"/><path class="ed-ld3b8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:je"} {...others} />);
}

export default Component;
