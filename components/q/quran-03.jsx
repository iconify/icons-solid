import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iofxxabca.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/b/b7pyyhb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iofxxabca"/><path class="icjlvdb0c"/><path class="b7pyyhb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quran-03"} {...others} />);
}

export default Component;
