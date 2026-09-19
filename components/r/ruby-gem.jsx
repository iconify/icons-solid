import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/l/lrz8immyw.css';
import '../../css/q/qhmpibcto.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="lrz8immyw"/><path class="qhmpibcto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ruby-gem"} {...others} />);
}

export default Component;
