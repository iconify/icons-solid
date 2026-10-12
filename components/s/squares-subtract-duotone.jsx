import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s41azxbgg.css';
import '../../css/y/y9qo_5b3l.css';
import '../../css/g/glslupcha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s41azxbgg"/><path class="y9qo_5b3l"/><path class="glslupcha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:squares-subtract-duotone"} {...others} />);
}

export default Component;
