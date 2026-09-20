import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbt72703q.css';
import '../../css/x/xofqjus7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mbt72703q"/><path class="xofqjus7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:graduation-cap-duotone"} {...others} />);
}

export default Component;
