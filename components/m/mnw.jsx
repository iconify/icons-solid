import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn6p365rj.css';
import '../../css/q/qkzfnpbsa.css';
import '../../css/f/fl1-73ttc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hn6p365rj"/><path class="qkzfnpbsa"/><path class="fl1-73ttc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mnw"} {...others} />);
}

export default Component;
