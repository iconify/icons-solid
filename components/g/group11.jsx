import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ehzunbwiz.css';
import '../../css/f/fg0d_zimf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ehzunbwiz"/><path class="fg0d_zimf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:group11"} {...others} />);
}

export default Component;
