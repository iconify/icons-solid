import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exxl5jkdu.css';
import '../../css/s/smmrjzb2f.css';
import '../../css/u/uj-a5jb7c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="exxl5jkdu"/><path class="smmrjzb2f"/><path class="uj-a5jb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:running-shirt"} {...others} />);
}

export default Component;
