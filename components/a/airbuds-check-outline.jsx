import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw34s-b-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iw34s-b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-check-outline"} {...others} />);
}

export default Component;
