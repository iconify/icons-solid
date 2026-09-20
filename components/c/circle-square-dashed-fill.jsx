import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6uonebog.css';
import '../../css/l/l_j0jz7_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b6uonebog"/><path class="l_j0jz7_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-square-dashed-fill"} {...others} />);
}

export default Component;
