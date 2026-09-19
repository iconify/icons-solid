import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v889btb6l.css';
import '../../css/j/jd8alfe-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v889btb6l"/><path class="jd8alfe-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:window-arrow-out"} {...others} />);
}

export default Component;
