import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r35rppbpm.css';
import '../../css/y/yjyw_obwv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r35rppbpm"/><path class="yjyw_obwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lowerleftfountainpen"} {...others} />);
}

export default Component;
