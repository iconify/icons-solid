import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8furxbvt.css';
import '../../css/o/oe3ikkuio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8furxbvt"/><path clip-rule="evenodd" class="oe3ikkuio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:satellite-filled"} {...others} />);
}

export default Component;
