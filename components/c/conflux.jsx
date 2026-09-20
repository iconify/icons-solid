import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o11i93z8m.css';
import '../../css/x/xtw1k2b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o11i93z8m"/><path class="xtw1k2b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:conflux"} {...others} />);
}

export default Component;
