import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sk8vevout.css';
import '../../css/j/j_roh9boo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sk8vevout"/><path class="j_roh9boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gem-stone"} {...others} />);
}

export default Component;
