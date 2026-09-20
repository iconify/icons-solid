import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yytukcc2b.css';
import '../../css/q/qk7c1jbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yytukcc2b"/><path class="qk7c1jbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:soccer-field"} {...others} />);
}

export default Component;
