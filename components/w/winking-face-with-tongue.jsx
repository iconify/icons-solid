import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/a/abv2j0b8i.css';
import '../../css/u/umzxywbps.css';
import '../../css/g/gcarh6-gd.css';
import '../../css/i/img_qobua.css';
import '../../css/e/e9f2qmdhx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="abv2j0b8i"/><path class="umzxywbps"/><path class="gcarh6-gd"/><path class="img_qobua"/><path class="e9f2qmdhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:winking-face-with-tongue"} {...others} />);
}

export default Component;
