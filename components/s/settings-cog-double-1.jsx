import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qovy5h5jb.css';
import '../../css/j/j_yt1hbdr.css';
import '../../css/t/t7x09zibz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qovy5h5jb"/><path class="j_yt1hbdr"/><path class="t7x09zibz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:settings-cog-double-1"} {...others} />);
}

export default Component;
