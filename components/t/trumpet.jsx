import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_ia9trwh.css';
import '../../css/i/i961peb9z.css';
import '../../css/e/et92v8bqb.css';
import '../../css/h/h5l4vccfp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v_ia9trwh"/><path class="i961peb9z"/><path class="et92v8bqb"/><path class="h5l4vccfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:trumpet"} {...others} />);
}

export default Component;
