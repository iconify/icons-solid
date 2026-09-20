import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdj1o0xsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdj1o0xsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:gavel"} {...others} />);
}

export default Component;
