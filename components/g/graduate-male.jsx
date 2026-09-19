import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpgfzqb3v.css';
import '../../css/o/os6w96bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kpgfzqb3v"/><path class="os6w96bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:graduate-male"} {...others} />);
}

export default Component;
