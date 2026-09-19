import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1n5agh6p.css';
import '../../css/y/y41i_nf7f.css';
import '../../css/c/cgto4lbtn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b1n5agh6p"/><path class="y41i_nf7f"/><path class="cgto4lbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:electric-plug"} {...others} />);
}

export default Component;
