import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w833lb9ei.css';
import '../../css/p/ppq8jkh-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w833lb9ei"/><path class="ppq8jkh-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ginetex:professional-dry-cleaning-in-perchloroethylene-hydrocarbons-heavy-benzines-1"} {...others} />);
}

export default Component;
