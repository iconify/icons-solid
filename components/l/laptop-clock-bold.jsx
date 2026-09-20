import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-vp84b5b.css';
import '../../css/j/jkrx8ppgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-vp84b5b"/><path class="jkrx8ppgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:laptop-clock-bold"} {...others} />);
}

export default Component;
