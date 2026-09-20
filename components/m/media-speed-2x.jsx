import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojm9wsbdn.css';

const viewBox = {"width":40,"height":24};
const content = `<path class="ojm9wsbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-speed-2x"} {...others} />);
}

export default Component;
