import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq0gmnb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xq0gmnb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paintbrush-sharp-fill"} {...others} />);
}

export default Component;
