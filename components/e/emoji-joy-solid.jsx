import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov5bo0d0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ov5bo0d0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:emoji-joy-solid"} {...others} />);
}

export default Component;
