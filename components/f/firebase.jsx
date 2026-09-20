import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baw3zzbws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="baw3zzbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:firebase"} {...others} />);
}

export default Component;
