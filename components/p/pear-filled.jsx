import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uno_xbqqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uno_xbqqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pear-filled"} {...others} />);
}

export default Component;
