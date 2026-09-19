import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anuis4b4o.css';
import '../../css/l/lx9wmlfpv.css';
import '../../css/h/h-rpm9riz.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="anuis4b4o b"/><rect class="b lx9wmlfpv"/><path class="b h-rpm9riz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:compare-filled"} {...others} />);
}

export default Component;
