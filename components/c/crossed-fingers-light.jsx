import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwm3l1baj.css';
import '../../css/d/dzhnytx5f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kwm3l1baj"/><path class="dzhnytx5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crossed-fingers-light"} {...others} />);
}

export default Component;
