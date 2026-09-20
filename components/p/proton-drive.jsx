import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og2z5b78e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="og2z5b78e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:proton-drive"} {...others} />);
}

export default Component;
