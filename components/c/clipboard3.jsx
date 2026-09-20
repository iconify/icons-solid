import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u1ex0txtl.css';
import '../../css/a/ap3bxh-bc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u1ex0txtl"/><path class="ap3bxh-bc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clipboard3"} {...others} />);
}

export default Component;
