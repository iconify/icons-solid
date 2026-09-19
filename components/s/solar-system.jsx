import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gm39xob2t.css';
import '../../css/q/qvxyu9jdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gm39xob2t"/><path class="qvxyu9jdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:solar-system"} {...others} />);
}

export default Component;
