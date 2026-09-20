import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt5aatsrh.css';
import '../../css/x/xsgq8ckwo.css';
import '../../css/f/fodrk9f3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kt5aatsrh"/><path class="xsgq8ckwo"/><path class="fodrk9f3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:music-note-circle-block-1"} {...others} />);
}

export default Component;
