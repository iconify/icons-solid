import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aws265bny.css';
import '../../css/p/p8r-0jx0k.css';
import '../../css/m/mt7fmg7xj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aws265bny"/><path class="p8r-0jx0k"/><path class="mt7fmg7xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-copy"} {...others} />);
}

export default Component;
