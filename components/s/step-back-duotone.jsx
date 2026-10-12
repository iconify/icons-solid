import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1ewd6o7u.css';
import '../../css/z/za_8z_t8j.css';
import '../../css/h/h7gz2uwiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r1ewd6o7u"/><path class="za_8z_t8j"/><path class="h7gz2uwiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:step-back-duotone"} {...others} />);
}

export default Component;
