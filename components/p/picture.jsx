import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/s/sg45gybzf.css';
import '../../css/z/z5ev44bvw.css';
import '../../css/q/qndu10yle.css';
import '../../css/o/oea2wbcgo.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="sg45gybzf"/><path class="z5ev44bvw"/><path class="qndu10yle"/><path class="oea2wbcgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:picture"} {...others} />);
}

export default Component;
