import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z08-9pbuq.css';
import '../../css/z/z3cyn9bdw.css';
import '../../css/s/st6veybqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z08-9pbuq"/><path class="z3cyn9bdw"/><path class="st6veybqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:users-round"} {...others} />);
}

export default Component;
