import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lekja6r0i.css';
import '../../css/m/mwjzc-b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lekja6r0i"/><path class="mwjzc-b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:ipod-player"} {...others} />);
}

export default Component;
