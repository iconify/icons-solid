import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1ryztnrd.css';
import '../../css/n/n6zdheb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1ryztnrd"/><path clip-rule="evenodd" class="n6zdheb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-right-detailed-fill"} {...others} />);
}

export default Component;
