import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfd9koo4a.css';
import '../../css/v/vl8d-nbty.css';
import '../../css/s/shthbcb5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfd9koo4a"/><path class="vl8d-nbty"/><path class="shthbcb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-numeric-alt-up"} {...others} />);
}

export default Component;
