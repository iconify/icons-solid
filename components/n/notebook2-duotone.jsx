import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/brzf3wbow.css';
import '../../css/n/n9yq97bau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="brzf3wbow"/><path class="n9yq97bau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notebook2-duotone"} {...others} />);
}

export default Component;
