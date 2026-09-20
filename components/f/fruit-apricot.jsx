import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl9wfbyji.css';
import '../../css/p/ph-v4yb9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fl9wfbyji"/><path class="ph-v4yb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fruit-apricot"} {...others} />);
}

export default Component;
