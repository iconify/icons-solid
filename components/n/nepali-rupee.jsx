import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b5c7o7bik.css';
import '../../css/p/pg9ee_23l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b5c7o7bik"/><path class="pg9ee_23l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:nepali-rupee"} {...others} />);
}

export default Component;
