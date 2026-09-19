import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-ulsw_ta.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtjq5ubdn.css';
import '../../css/p/p6udk3bpf.css';
import '../../css/j/jz4o31b3z.css';

const viewBox = {"width":32,"height":32};
const content = `<defs><path id="SVG7uvgHdPV" class="m-ulsw_ta"/></defs><g class="ft5dv1b6b"><use href="#SVG7uvgHdPV"/><path class="dtjq5ubdn"/><path class="p6udk3bpf"/><use href="#SVG7uvgHdPV"/><path class="jz4o31b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shamrock"} {...others} />);
}

export default Component;
