import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3l6mhb4c.css';
import '../../css/q/qoes-qt6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3l6mhb4c"/><path class="qoes-qt6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monetization-tablet-bold"} {...others} />);
}

export default Component;
