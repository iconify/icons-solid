import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxon0y14n.css';
import '../../css/u/uwoztrbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxon0y14n"/><path class="uwoztrbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sea-view"} {...others} />);
}

export default Component;
