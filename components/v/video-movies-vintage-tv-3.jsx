import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxs9kibnt.css';
import '../../css/g/gvn1ulafh.css';
import '../../css/q/qcrc8mb7w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pxs9kibnt"/><path class="gvn1ulafh"/><path class="qcrc8mb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:video-movies-vintage-tv-3"} {...others} />);
}

export default Component;
