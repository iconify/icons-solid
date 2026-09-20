import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tze26ka-q.css';
import '../../css/g/gpipap9iy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tze26ka-q"/><path class="gpipap9iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hair-skin-bold"} {...others} />);
}

export default Component;
