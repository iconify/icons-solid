import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tllrkkbnh.css';
import '../../css/l/lml-fobsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tllrkkbnh"/><path class="lml-fobsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:adobe-photoshop"} {...others} />);
}

export default Component;
