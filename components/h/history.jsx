import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2qs83soi.css';
import '../../css/e/ea7_acb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2qs83soi"/><path class="ea7_acb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:history"} {...others} />);
}

export default Component;
