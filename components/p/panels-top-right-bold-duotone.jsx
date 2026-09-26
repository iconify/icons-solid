import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5diid9zm.css';
import '../../css/c/cbr-qib7h.css';
import '../../css/s/s169cvnfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o5diid9zm"/><path class="cbr-qib7h"/><path class="s169cvnfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-right-bold-duotone"} {...others} />);
}

export default Component;
