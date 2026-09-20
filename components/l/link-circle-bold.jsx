import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu8ot3m7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iu8ot3m7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-circle-bold"} {...others} />);
}

export default Component;
