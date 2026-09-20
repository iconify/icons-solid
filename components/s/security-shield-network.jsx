import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uww2inb7w.css';
import '../../css/t/tri5-3hsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uww2inb7w"/><path class="tri5-3hsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-shield-network"} {...others} />);
}

export default Component;
