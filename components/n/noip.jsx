import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu-6n5ags.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu-6n5ags"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:noip"} {...others} />);
}

export default Component;
