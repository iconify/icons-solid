import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hohatw9cb.css';
import '../../css/x/x_3w8m6xy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hohatw9cb"/><path class="x_3w8m6xy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:car"} {...others} />);
}

export default Component;
