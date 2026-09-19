import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mql5pkbnr.css';
import '../../css/p/p68cdpbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mql5pkbnr"/><path class="p68cdpbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:tennis-match-alt"} {...others} />);
}

export default Component;
