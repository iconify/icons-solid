import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shpzc8bzi.css';
import '../../css/e/eh3ot8boa.css';
import '../../css/y/y2zsi2bct.css';
import '../../css/f/f5mb6fbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shpzc8bzi"/><path class="eh3ot8boa"/><path class="y2zsi2bct"/><path class="f5mb6fbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-chrome"} {...others} />);
}

export default Component;
