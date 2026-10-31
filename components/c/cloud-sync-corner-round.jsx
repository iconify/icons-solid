import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj2u3m68c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj2u3m68c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-sync-corner-round"} {...others} />);
}

export default Component;
