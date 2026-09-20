import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pj9u6obqg.css';
import '../../css/z/z239zwusj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pj9u6obqg"/><path class="z239zwusj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-circle"} {...others} />);
}

export default Component;
