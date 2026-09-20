import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzzm7rb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzzm7rb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-watch-minus"} {...others} />);
}

export default Component;
