import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeuu9nbuy.css';
import '../../css/r/rfjv2600v.css';
import '../../css/a/aqn_8jqff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jeuu9nbuy"/><path class="rfjv2600v"/><path class="aqn_8jqff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-vertical-bold"} {...others} />);
}

export default Component;
