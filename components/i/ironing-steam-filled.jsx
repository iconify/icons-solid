import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmtv_jb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmtv_jb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ironing-steam-filled"} {...others} />);
}

export default Component;
