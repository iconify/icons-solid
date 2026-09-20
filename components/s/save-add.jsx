import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wjg491cmr.css';
import '../../css/c/cvhwpebqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wjg491cmr"/><path class="cvhwpebqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:save-add"} {...others} />);
}

export default Component;
