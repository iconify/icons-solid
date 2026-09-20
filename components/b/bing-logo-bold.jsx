import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt1ztnb6x.css';
import '../../css/l/ldryaf89d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt1ztnb6x"/><path class="ldryaf89d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bing-logo-bold"} {...others} />);
}

export default Component;
