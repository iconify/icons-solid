import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d23a2lb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d23a2lb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cardholder-bold"} {...others} />);
}

export default Component;
