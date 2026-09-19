import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv63wjb8h.css';
import '../../css/t/to-dpg6ql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bv63wjb8h"/><path class="to-dpg6ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:camera"} {...others} />);
}

export default Component;
