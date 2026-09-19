import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0iz04b7p.css';
import '../../css/e/efff1d6ad.css';
import '../../css/q/q7r6cxbks.css';
import '../../css/n/n_co-nb_o.css';
import '../../css/b/b3lzjpb0g.css';
import '../../css/k/klf-74avs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="a0iz04b7p"/><path class="efff1d6ad"/><path class="q7r6cxbks"/><path class="n_co-nb_o"/><path class="b3lzjpb0g"/><path class="klf-74avs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mobile-phone-with-arrow"} {...others} />);
}

export default Component;
