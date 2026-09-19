import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7zs4u8eo.css';
import '../../css/b/bbc2fccsv.css';
import '../../css/t/t3du_ox9r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s7zs4u8eo"/><path class="bbc2fccsv"/><path class="t3du_ox9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wilted-flower"} {...others} />);
}

export default Component;
