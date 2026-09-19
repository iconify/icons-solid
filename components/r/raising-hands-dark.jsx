import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilwj9wk9f.css';
import '../../css/g/gzzb74pus.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ilwj9wk9f"/><path class="gzzb74pus"/><path class="de29zjbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:raising-hands-dark"} {...others} />);
}

export default Component;
