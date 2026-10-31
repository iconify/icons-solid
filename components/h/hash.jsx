import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/umhashljv.css';
import '../../css/b/budt_2bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="umhashljv"/><path class="budt_2bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hash"} {...others} />);
}

export default Component;
