import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0oe49b3b.css';
import '../../css/p/p4r4-2bra.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a0oe49b3b"/><path class="p4r4-2bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:reminder-medical"} {...others} />);
}

export default Component;
