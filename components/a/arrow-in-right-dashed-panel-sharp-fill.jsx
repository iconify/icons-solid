import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycoe2fbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycoe2fbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-right-dashed-panel-sharp-fill"} {...others} />);
}

export default Component;
