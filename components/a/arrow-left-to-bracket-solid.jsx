import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/d6etdobbg.css';
import '../../css/z/zlhrpyc2t.css';
import '../../css/g/gg2o1abfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="d6etdobbg"/><path class="zlhrpyc2t"/><path class="gg2o1abfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-left-to-bracket-solid"} {...others} />);
}

export default Component;
