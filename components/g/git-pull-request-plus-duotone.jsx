import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j45eambkn.css';
import '../../css/t/tn5glfbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j45eambkn"/><path class="tn5glfbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-plus-duotone"} {...others} />);
}

export default Component;
