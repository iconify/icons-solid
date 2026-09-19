import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhjalw2tn.css';
import '../../css/c/crl47bb3t.css';
import '../../css/j/j4lnu5b0r.css';
import '../../css/g/gkfjuxvzv.css';
import '../../css/f/fbzg1sspd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="nhjalw2tn"/><path class="crl47bb3t"/><path class="j4lnu5b0r"/><path class="gkfjuxvzv"/><path class="fbzg1sspd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:raccoon"} {...others} />);
}

export default Component;
