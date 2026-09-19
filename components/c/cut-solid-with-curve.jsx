import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkluoqgfn.css';
import '../../css/z/zc9r-_b8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dkluoqgfn"/><path class="zc9r-_b8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cut-solid-with-curve"} {...others} />);
}

export default Component;
