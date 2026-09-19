import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pytq4bb0c.css';
import '../../css/v/vtc4ipbzp.css';
import '../../css/n/neygi1gkd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="pytq4bb0c"/><path class="vtc4ipbzp"/><path class="neygi1gkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:build"} {...others} />);
}

export default Component;
