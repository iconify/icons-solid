import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iovyd2lnb.css';
import '../../css/i/iio97lbyc.css';
import '../../css/e/e9vub8bzj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="iovyd2lnb"><path class="iio97lbyc"/><path class="e9vub8bzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:readme"} {...others} />);
}

export default Component;
