import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k2iakp5mj.css';
import '../../css/o/oqh2iv9dj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k2iakp5mj"/><path class="oqh2iv9dj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:book-check"} {...others} />);
}

export default Component;
