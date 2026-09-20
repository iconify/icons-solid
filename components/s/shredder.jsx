import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8mkg-blv.css';
import '../../css/f/f4jpu5bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q8mkg-blv"/><path class="f4jpu5bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shredder"} {...others} />);
}

export default Component;
