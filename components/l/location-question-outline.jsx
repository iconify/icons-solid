import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be_y6qbvg.css';
import '../../css/m/muhkath4n.css';
import '../../css/b/brfwmjb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="be_y6qbvg"/><path class="muhkath4n"/><path clip-rule="evenodd" class="brfwmjb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:location-question-outline"} {...others} />);
}

export default Component;
