import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt7tzjx4w.css';
import '../../css/z/z8-isybgj.css';
import '../../css/l/l57r68y7k.css';
import '../../css/c/cjrd52xhg.css';
import '../../css/y/yt14d7bod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tt7tzjx4w"/><path class="z8-isybgj"/><path class="l57r68y7k"/><path class="cjrd52xhg"/><path class="yt14d7bod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:camera-settings-wifi"} {...others} />);
}

export default Component;
