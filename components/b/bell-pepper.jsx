import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z68fdjelf.css';
import '../../css/h/hzliorb3i.css';
import '../../css/v/vbqkaybcx.css';
import '../../css/g/gclm_lu2r.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/ihbz2icia.css';
import '../../css/z/z9c284bre.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z68fdjelf"/><path class="hzliorb3i"/><path class="vbqkaybcx"/><path class="gclm_lu2r"/><g class="jn8qy4bru"><path class="ihbz2icia"/><path class="z9c284bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bell-pepper"} {...others} />);
}

export default Component;
