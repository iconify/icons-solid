import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpoubbo_e.css';
import '../../css/w/wr4cx4b8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpoubbo_e"/><path class="wr4cx4b8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dice-3"} {...others} />);
}

export default Component;
