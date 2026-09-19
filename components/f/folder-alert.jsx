import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ie6pw71gv.css';
import '../../css/f/fq-z0gh7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ie6pw71gv"/><path class="fq-z0gh7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:folder-alert"} {...others} />);
}

export default Component;
