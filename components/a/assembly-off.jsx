import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hbbzrh5bb.css';
import '../../css/o/o0qkey87y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hbbzrh5bb"/><path class="o0qkey87y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:assembly-off"} {...others} />);
}

export default Component;
