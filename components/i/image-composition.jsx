import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mmj0dutfl.css';
import '../../css/c/c_cjlv91j.css';
import '../../css/a/aedg6zbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mmj0dutfl"/><path class="c_cjlv91j"/><path class="aedg6zbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-composition"} {...others} />);
}

export default Component;
