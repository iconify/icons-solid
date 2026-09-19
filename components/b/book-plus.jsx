import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd934o11m.css';
import '../../css/i/icjlvdb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gd934o11m"/><path class="icjlvdb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-plus"} {...others} />);
}

export default Component;
