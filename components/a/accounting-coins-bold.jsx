import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fde5jabaf.css';
import '../../css/k/k4nhvymim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fde5jabaf"/><path class="k4nhvymim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:accounting-coins-bold"} {...others} />);
}

export default Component;
