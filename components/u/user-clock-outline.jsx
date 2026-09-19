import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuu1fpbjf.css';
import '../../css/r/rkquswc8h.css';
import '../../css/l/l8bnbhbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xuu1fpbjf"/><path class="rkquswc8h"/><path clip-rule="evenodd" class="l8bnbhbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:user-clock-outline"} {...others} />);
}

export default Component;
