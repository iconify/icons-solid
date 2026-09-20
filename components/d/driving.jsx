import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4jv04b5r.css';
import '../../css/l/l1d5of9bn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o4jv04b5r"/><path class="l1d5of9bn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:driving"} {...others} />);
}

export default Component;
