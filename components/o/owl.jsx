import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9b5ciy9y.css';
import '../../css/q/qe6oxxb0y.css';
import '../../css/d/d1dv2syvz.css';
import '../../css/y/yckohob8q.css';
import '../../css/r/rnys45bun.css';
import '../../css/p/pda12jbae.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q9b5ciy9y"/><path class="qe6oxxb0y"/><path class="d1dv2syvz"/><path class="yckohob8q"/><path class="rnys45bun"/><path class="pda12jbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:owl"} {...others} />);
}

export default Component;
