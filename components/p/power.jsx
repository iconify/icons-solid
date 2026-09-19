import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viie0hb-o.css';
import '../../css/f/fiyd37bsz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="viie0hb-o"/><path class="fiyd37bsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:power"} {...others} />);
}

export default Component;
