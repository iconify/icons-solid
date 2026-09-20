import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx4vzkb0x.css';
import '../../css/p/p3id4ob0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fx4vzkb0x"/><path class="p3id4ob0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:data-base-filled"} {...others} />);
}

export default Component;
