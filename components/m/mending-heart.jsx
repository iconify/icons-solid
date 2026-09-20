import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z60_t-bxa.css';
import '../../css/x/xlzgy4bzl.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/t/t597itgcw.css';
import '../../css/s/spner8b1a.css';
import '../../css/v/vq_vr4t7x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z60_t-bxa"/><path class="xlzgy4bzl"/><g class="rpvb-o6bq"><path class="t597itgcw"/><path class="spner8b1a"/><path class="vq_vr4t7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mending-heart"} {...others} />);
}

export default Component;
