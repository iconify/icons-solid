import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap7n5ps2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ap7n5ps2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-screaming"} {...others} />);
}

export default Component;
