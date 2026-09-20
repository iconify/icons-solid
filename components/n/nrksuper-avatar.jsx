import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iizj5gb9u.css';
import '../../css/e/eexxuyj4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iizj5gb9u"/><path clip-rule="evenodd" class="eexxuyj4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:nrksuper-avatar"} {...others} />);
}

export default Component;
