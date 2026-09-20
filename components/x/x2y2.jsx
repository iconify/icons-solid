import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km06l1bkk.css';
import '../../css/h/hh9pgq2kj.css';
import '../../css/r/r6o281qjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km06l1bkk"/><path class="hh9pgq2kj"/><path clip-rule="evenodd" class="r6o281qjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:x2y2"} {...others} />);
}

export default Component;
