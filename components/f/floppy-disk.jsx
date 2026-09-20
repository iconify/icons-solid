import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr8we86-j.css';
import '../../css/r/rpkhy_b3u.css';
import '../../css/h/hsmq3ob6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr8we86-j"/><path class="rpkhy_b3u"/><path class="hsmq3ob6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:floppy-disk"} {...others} />);
}

export default Component;
