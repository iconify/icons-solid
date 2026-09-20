import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgxa4cbke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgxa4cbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:signal-4g-plus"} {...others} />);
}

export default Component;
