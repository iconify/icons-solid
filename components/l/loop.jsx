import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gn5jjkgvg.css';
import '../../css/b/b8jffq-bp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gn5jjkgvg"/><path class="b8jffq-bp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:loop"} {...others} />);
}

export default Component;
