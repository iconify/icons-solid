import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzs94db-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xzs94db-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-outline"} {...others} />);
}

export default Component;
