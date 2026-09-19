import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjcmjo8jw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjcmjo8jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:power-force-shutdown"} {...others} />);
}

export default Component;
