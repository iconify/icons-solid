import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/owh02smgg.css';
import '../../css/c/csk6j7b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="owh02smgg"/><path class="csk6j7b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-up-left"} {...others} />);
}

export default Component;
