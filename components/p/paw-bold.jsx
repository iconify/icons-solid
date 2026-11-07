import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qifoqvije.css';
import '../../css/z/z785bw_il.css';
import '../../css/f/fjd-zv3si.css';
import '../../css/x/x7eqpdbig.css';
import '../../css/m/mcaamkbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qifoqvije"/><path class="z785bw_il"/><path class="fjd-zv3si"/><path class="x7eqpdbig"/><path class="mcaamkbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paw-bold"} {...others} />);
}

export default Component;
