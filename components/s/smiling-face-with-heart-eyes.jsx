import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/l/laqem3yyk.css';
import '../../css/p/pwtfkab3z.css';
import '../../css/d/dmwam7bfh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="laqem3yyk"/><path class="pwtfkab3z"/><path class="dmwam7bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:smiling-face-with-heart-eyes"} {...others} />);
}

export default Component;
