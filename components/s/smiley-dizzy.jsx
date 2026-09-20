import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2jkth9an.css';
import '../../css/p/ph3npob9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2jkth9an"/><path class="ph3npob9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-dizzy"} {...others} />);
}

export default Component;
