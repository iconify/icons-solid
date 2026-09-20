import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pl6vmac3j.css';
import '../../css/h/hxqo68bhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pl6vmac3j"/><path class="hxqo68bhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microscope"} {...others} />);
}

export default Component;
