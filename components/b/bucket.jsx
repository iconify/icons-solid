import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c787b-zxi.css';
import '../../css/b/bxutvf4dz.css';
import '../../css/v/v62_33uqe.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="c787b-zxi"/><path class="bxutvf4dz"/><path class="v62_33uqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bucket"} {...others} />);
}

export default Component;
