import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jcca15o5f.css';
import '../../css/h/hpy0jmbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jcca15o5f"/><path class="hpy0jmbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bean-off"} {...others} />);
}

export default Component;
