import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec6b-jbjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ec6b-jbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-right-dashed-panel-sharp-fill"} {...others} />);
}

export default Component;
