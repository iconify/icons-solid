import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b1i2rcbtn.css';
import '../../css/o/oi3ksybya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b1i2rcbtn"/><path class="oi3ksybya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-lock"} {...others} />);
}

export default Component;
