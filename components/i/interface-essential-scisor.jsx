import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glxlc_bpl.css';
import '../../css/a/a2gr9fb-b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="glxlc_bpl"/><path class="a2gr9fb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-scisor"} {...others} />);
}

export default Component;
