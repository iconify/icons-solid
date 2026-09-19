import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oyh1zhilo.css';
import '../../css/n/njgedrnok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oyh1zhilo"/><path class="njgedrnok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:prayer-rug-02"} {...others} />);
}

export default Component;
