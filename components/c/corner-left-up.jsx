import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdf8a4bjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdf8a4bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-left-up"} {...others} />);
}

export default Component;
