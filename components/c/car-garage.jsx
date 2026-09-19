import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o_s0byb3c.css';
import '../../css/y/ymawimbix.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="o_s0byb3c"/><path class="ymawimbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:car-garage"} {...others} />);
}

export default Component;
