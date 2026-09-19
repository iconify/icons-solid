import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpg-xvqnb.css';
import '../../css/s/si6_izbqe.css';
import '../../css/b/bfe7iwbvy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lpg-xvqnb"/><path class="si6_izbqe"/><path class="bfe7iwbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hut"} {...others} />);
}

export default Component;
