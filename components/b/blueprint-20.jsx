import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrnmkvb0i.css';
import '../../css/c/c-9oiujyu.css';
import '../../css/j/joab5_bzz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lrnmkvb0i"/><path class="c-9oiujyu"/><path class="joab5_bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blueprint-20"} {...others} />);
}

export default Component;
