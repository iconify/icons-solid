import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3xz25j2v.css';
import '../../css/p/p9n4sqd2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="f3xz25j2v"/><path class="p9n4sqd2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:rail"} {...others} />);
}

export default Component;
