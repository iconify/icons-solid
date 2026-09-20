import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rf-7-1b0w.css';
import '../../css/n/nnm6p5p2j.css';
import '../../css/i/ierjdexox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rf-7-1b0w"/><path class="nnm6p5p2j"/><path class="ierjdexox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ticket-duotone"} {...others} />);
}

export default Component;
