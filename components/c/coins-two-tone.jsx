import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j41a42nnh.css';
import '../../css/p/pexk4pjdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j41a42nnh"/><path class="pexk4pjdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coins-two-tone"} {...others} />);
}

export default Component;
