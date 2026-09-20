import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-64hbpsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e-64hbpsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hbb"} {...others} />);
}

export default Component;
