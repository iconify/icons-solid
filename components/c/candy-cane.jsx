import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hya0m4b1r.css';
import '../../css/u/utm1ftb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hya0m4b1r wm-k"/><path class="utm1ftb-c wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:candy-cane"} {...others} />);
}

export default Component;
