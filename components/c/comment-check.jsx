import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzjoz5b9z.css';
import '../../css/k/k4wjgvq4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dzjoz5b9z"/><path class="k4wjgvq4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-check"} {...others} />);
}

export default Component;
