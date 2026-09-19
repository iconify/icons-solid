import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rw-xz9jys.css';
import '../../css/l/lrh1frbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rw-xz9jys"/><path class="lrh1frbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:command-line"} {...others} />);
}

export default Component;
