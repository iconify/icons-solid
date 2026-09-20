import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjo0hbcte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjo0hbcte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-watch-cog"} {...others} />);
}

export default Component;
