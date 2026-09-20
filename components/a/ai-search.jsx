import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/e/e4mhcd03p.css';
import '../../css/j/jc2gwibxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="e4mhcd03p"/><path class="jc2gwibxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-search"} {...others} />);
}

export default Component;
