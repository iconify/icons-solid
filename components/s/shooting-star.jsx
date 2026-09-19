import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht6ygebcl.css';
import '../../css/e/eknl1w2wo.css';
import '../../css/c/cg43z_9pk.css';
import '../../css/v/vq6r24bfc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ht6ygebcl"/><path class="eknl1w2wo"/><path class="cg43z_9pk"/><path class="vq6r24bfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shooting-star"} {...others} />);
}

export default Component;
