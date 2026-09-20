import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgn2xtoqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgn2xtoqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-transfer-horizontal-large-1"} {...others} />);
}

export default Component;
