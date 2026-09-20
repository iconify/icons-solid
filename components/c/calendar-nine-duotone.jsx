import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmunasb2f.css';
import '../../css/v/vg_16dn1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmunasb2f"/><path clip-rule="evenodd" class="vg_16dn1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:calendar-nine-duotone"} {...others} />);
}

export default Component;
