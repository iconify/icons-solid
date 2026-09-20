import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc87u0btn.css';
import '../../css/f/fs_fwv3jd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sc87u0btn"/><path class="fs_fwv3jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:walkman-player"} {...others} />);
}

export default Component;
