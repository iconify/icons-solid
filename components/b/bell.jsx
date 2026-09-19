import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/exltrwyti.css';
import '../../css/n/n6uc3olmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="exltrwyti"/><path class="n6uc3olmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bell"} {...others} />);
}

export default Component;
