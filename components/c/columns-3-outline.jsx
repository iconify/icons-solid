import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfy61-bkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dfy61-bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-outline"} {...others} />);
}

export default Component;
