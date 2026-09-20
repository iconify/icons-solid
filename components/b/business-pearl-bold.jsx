import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1ignbsnl.css';
import '../../css/g/g0qglybal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1ignbsnl"/><path class="g0qglybal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-pearl-bold"} {...others} />);
}

export default Component;
