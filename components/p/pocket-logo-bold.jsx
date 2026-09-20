import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2je7_6ed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2je7_6ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pocket-logo-bold"} {...others} />);
}

export default Component;
