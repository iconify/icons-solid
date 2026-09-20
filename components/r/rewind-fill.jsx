import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo9q5npwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yo9q5npwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:rewind-fill"} {...others} />);
}

export default Component;
