import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/le-z6_x1u.css';
import '../../css/z/z96np1bry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="le-z6_x1u"/><path class="z96np1bry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-successor-duotone"} {...others} />);
}

export default Component;
