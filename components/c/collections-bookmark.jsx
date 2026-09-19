import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1pix1bws.css';
import '../../css/r/rugjrsblu.css';
import '../../css/z/z6kf3ab0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g1pix1bws"/><path class="rugjrsblu"/><path class="z6kf3ab0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:collections-bookmark"} {...others} />);
}

export default Component;
