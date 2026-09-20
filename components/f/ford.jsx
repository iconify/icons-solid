import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzoba4bgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rzoba4bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ford"} {...others} />);
}

export default Component;
