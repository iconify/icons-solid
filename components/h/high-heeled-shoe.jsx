import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ioqzcac_u.css';
import '../../css/y/y-ihjobey.css';
import '../../css/f/f90u8jb6k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ioqzcac_u"/><path class="y-ihjobey"/><path class="f90u8jb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:high-heeled-shoe"} {...others} />);
}

export default Component;
