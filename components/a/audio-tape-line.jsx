import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yszkt334k.css';
import '../../css/n/n0xni4bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yszkt334k"/><path class="n0xni4bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:audio-tape-line"} {...others} />);
}

export default Component;
