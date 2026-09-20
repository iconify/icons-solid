import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2j8np86l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2j8np86l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:token-swap-line"} {...others} />);
}

export default Component;
