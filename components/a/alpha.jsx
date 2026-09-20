import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfcgv9bxo.css';
import '../../css/u/ugg30ccps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfcgv9bxo"/><path class="ugg30ccps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:alpha"} {...others} />);
}

export default Component;
