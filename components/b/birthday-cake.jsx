import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j15n6abqe.css';
import '../../css/r/rfw_iebux.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="j15n6abqe"/><path class="rfw_iebux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:birthday-cake"} {...others} />);
}

export default Component;
