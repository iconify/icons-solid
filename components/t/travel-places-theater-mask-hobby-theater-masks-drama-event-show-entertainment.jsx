import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hsng9xv1q.css';
import '../../css/n/njp9zubrh.css';
import '../../css/a/ayom60qyd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hsng9xv1q"/><path class="njp9zubrh"/><path class="ayom60qyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment"} {...others} />);
}

export default Component;
